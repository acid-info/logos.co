This document describes the Glacier Binary Byzantine Agreement algorithm, and its extension to a DAG structure in order to achieve a leaderless byzantine-resistant algorithm for consensus, of application in the context of permission-less blockchains.

## Objective

The first and foremost objective of this research project is to bypass the Avalanche algorithm patent. Minimal modifications are required to achieve this, and they must not introduce any detrimental effects over the original one. However, we take this as an opportunity to improve the algorithm in some meaningful aspect.

A challenge that is presented in this research is that the algorithm is very simple, and when it comes to scalability is hard to beat. It also performs very well when it comes to decentralization and security. Improving any of these aspects is indeed challenging.

- Improving scalability would entail either fundamentally improving the number of tx/s or reducing the communication costs (which generally translates into the ability to support a larger number of nodes).
- Improving security would imply better byzantine behavior resistance, or perhaps the ability to reduce time to finalization, which would mean that the security parameters are reached faster in the new algorithm. This could also include parameterization, or dynamics in parameters across the network for various types of decisions.
- Improving decentralization would entail the participation of a larger number of nodes, and/or the reduction of power given by concentration of voting power.

Of these vertices of the so-called blockchain trilemma, scalability and decentralization are optimal or nearly optimal in the case of Avalanche, given the sampling and probabilistic nature of the algorithm. That is not to say that is impossible to improve in those directions, but only marginal improvements are possible with high probability.

### Use cases

The main use case of the blockchain infrastructure is to provide support for bootstrapping and maintaining **Common Interest Communities (CIC)**. Common Interest Communities have the following key characteristics:

- We expect the range of network sizes to be wide. We can expect some CICs to be in the scale ~10 nodes, while others could (potentially) scale up to current blockchain limits.
- CICs will have varying degrees of inter-communication. Some will be existing in relative isolation (ie. no communication), while others could be very interdependent.
- Some CICs will exist as part of the Status Network, while others could exist completely independently as a separate infrastructure. In other words, unlike Avalanche, which requires an $AVAX fee to create a subnetwork, this requirement would be lifted.

These properties lead to two main research lines that could result, if successfully accomplished, in **a differentiated algorithm with a strong value proposition**:

1. DAG construction flexible enough to adapt to the different communication requirements
between CICs. A stream or subgraph would provide fast finality within the CIC, but also allow through a secondary protocol or a specific node selection step to occasionally “tie together” two subgraphs. This secondary protocol should provide enough flexibility to accommodate for different levels of communication frequency and finality requirements between subgraphs (ie CICs). The general idea would be to have DAGs growing separately that merge at certain intervals or under specific conditions.
2. Explore the space between permissioned committee-based blockchains and permissionless blockchains. This could be explored as a **hybrid reputation and staking** based approach, under the framework of Asymmetric Trust. This is specifically aimed at small communities that don’t have a large enough economic support to secure the network through staking (or have extremely powerful adversaries), while being able to rely partially on meatspace reputation (PoA, Stellar) or dynamic systems of reputation (IOTA’s Mana).

### Requirements

We define the set of initial requirements as follows:

- Must-have. These requirements are non-negotiable, fundamental to satisfying the use cases.
    - Sybil Resistant. This is a fundamental requirement of any blockchain design, but we list it here as it is unique in our case. We potentially need to support different models of sybil resistance depending on the scale of the network, and for bootstrapping purposes.
    - Crash & Byzantine Fault Tolerant. These are fundamental requirements in a public blockchain.
    - Fast Finality (ideally sub-second, or in the 2 sec range, like Avalanche). It is fundamental to the usability of the blockchain, and something within our reach considering the starting point given by Avalanche.
    - Leaderless / Weak Leadership, in order to keep the network as decentralized as possible, we aim at mitigating the centralization effects of strong leadership (like leader selection algorithms).
    - Individual participant scale ~ constant with respect to network size: in similar spirit to the leaderless or weak leadership requirement, we establish the need to allow participants in the network to have the same impact regardless of the scale of the network. In other words, the expectation of being queried by other nodes should not vary in accordance to network size.
    - Suitable for “social applications” (fast and efficient, modest computational resources). It is key that we steer away from the centralization effects of high computation requirements.
    - Ability to transition from a low node count, to a large node count. This is an important technical requirement in order to fulfill the use cases. The general idea is to be able to support networks from their inception at low scales to their growth and expansion phase.
    - Ability to bootstrap small networks. Either from scratch or as spin-off of a larger network. Closely related to the previous requirement, this refers to the process of growth from low to high scale networks, in a smooth manner.
- Desirable or to be explored. These requirements are initially considered as relevant to matching the use cases, but they aren’t required per se.
    - Round-less. This is usually associated to the lack of a leader election and distinct protocol phases as usually seen in classical BFT variants.
    - Probabilistic. Not a requirement per se, but a likely condition to achieve substantial improvements over classical BFT. The choice of a probabilistic approach to consensus is key in the Avalanche algorithm to achieve state of the art performance.
    - Strong liveness (at the expense of partition tolerance). A strongly live system makes progress under network partitioning conditions, and later on reconciles the forks.
    - Asynchronous. This is also associated with partition tolerance, in the sense that a chain can make progress even if a substantial part of the network is out of reach.
    - Decouple execution layer as much as possible, so that execution models interchangeable and/or extensible.
    - Explore the possibility of **highly partitioned blockchains with local views**. This takes inspiration from the Tangle (IOTA) and Hashgraph. The idea would be to explore these key points:
        - Could clients participate in consensus as well, in a very lightweight 
        manner, by just synchronizing a small part of the blockchain.
        - By the same token, this would bring many partial local chains, 
        perhaps only updated on-demand. Potentially client nodes can do this in a different 
        way than verifier nodes, that hold larger portions of the blockchain.

## Reference Work

Prior to conducting the design of a new consensus algorithm with the requirements described above, an extensive research was carried out. The research approach was to start out from surveys and taxonomies to cover the ground as systematically as it is possible, as well as identifying papers and algorithms that would not fit those taxonomies (via other paper references primarily).

- Snowball is the binary byzantine agreement algorithm that serves as the base for Avalanche to resolve conflicts in the DAG. In short, Avalanche is a combination of a DAG structure that employs the parent paths as a series of indirect votes for previous transactions. Voting itself is performed by the Snowball algorithm, with the difference that it runs a single iteration per DAG vertex. More details here:
    
    [Link to Avalanche Paper](https://assets.website-files.com/5d80307810123f5ffbb34d6e/6009805681b416f34dcae012_Avalanche%20Consensus%20Whitepaper.pdf).
    
- Lachesis is a family of algorithms that combine a DAG structure with classical BFT algorithms. The interest of this algorithm is that it leverages the DAG so that BFT rounds are embedded in it. It draws some inspiration from Hotstuff, one of the top-performing BFT algorithms, specifically in the consolidation of the multiple rounds into a continuous algorithm that interweaves them seamlessly.
[Link to Lachesis Paper](https://arxiv.org/abs/2108.01900). Note: As mentioned, Lachesis is a family of algorithms, so there are a series of papers. See Zotero for more.
- Evidence/Confidence. In our research, one of the most influential papers for the development of the new algorithm was the paper *Confidence as Higher-Order Uncertainty*, which elaborates the notion of confidence defined in terms of the amount of available evidence, and interpreted and processed as the relative stability of the first-order uncertainty evaluation.
    
    [Link to Paper](https://cis.temple.edu/~pwang/Publication/confidence.pdf)
    
- Other references. As part of the initial research, many other algorithms were visited, such as Hashgraph, Honeybadger, Dfinity, etc. More conclusions and information can be found in the checkpoint documents, but since they have been less influential for our purposes, we leave the details out of this document.

## Approach

As pointed out in the Reference Work section, the Snowball and Lachesis algorithms have been selected as the starting points for the development of the new algorithm. An extensive comparison between the two has been detailed in the following document.

[Comparison diagram between Snowball and Lachesis (hover and click “Original” for full view)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/96905d4c-ebc6-4f22-ac88-44ae19ed4b86/comparison_dag_consensus_v1.3.pdf)

Comparison diagram between Snowball and Lachesis (hover and click “Original” for full view)

comment

The comparison is somewhat complex, as both algorithms are state of the art, but relatively unproven in production (MainNet). Here, we would like to highlight the following key differences:

- Avalanche is probabilistic, which is directly related to its superior scalability. Conversely, Lachesis’ finality is deterministic, which simplifies many things (from algorithm analysis to inter-chain communication).
- Avalanche’s DAG is partially ordered, whereas Lachesis is totally ordered. The direct consequence of this is that Lachesis supports EVM without modifications, and Avalanche is better suited for an UTXO model.

The remaining question is which one of the two serves best as a basis for the new algorithm. We choose to start with Snowball because of its superior fundamental features (namely scalability), and embrace the need of researching specific solutions for the execution model and the multi-DAG problem in an innovative manner. In other words, while going the Lachesis route would simplify both execution model (providing direct support for EVM) and easier multi-DAG design (given deterministic finality), we see higher potential in embracing the current limitations of Avalanche, and innovate in those directions.

### Snowball

Our starting point is Avalanche’s Binary Byzantine Agreement algorithm. As long as modifications allow to build a DAG later on, this simplifies the design significantly. The DAG stays the same in principle: it supports confidence, but the core algorithm can be modeled without.

The concept of the Snowball algorithm is relatively simple. Following is a simplified description (lacking some details, but giving an overview). For further details, please refer to the [Avalanche paper](https://assets.website-files.com/5d80307810123f5ffbb34d6e/6009805681b416f34dcae012_Avalanche%20Consensus%20Whitepaper.pdf).

1. The objective is to vote yes/no on a decision (this decision could be a single bit, or, in our DAG use case, whether a vertex should be included or not).
2. Every node has an eventually-consistent complete view of the network. It will select at random k nodes, and will ask their opinion on the decision (yes/no).
3. After this sampling is finished, if there is a vote that has more than an $\alpha$ threshold, it accumulates one count for this opinion, as well as changes its opinion to this one. But, if a different opinion is received, the counter is reset to 1. If no threshold $\alpha$ is reached, the counter is reset to 0 instead.
4. After several iterations of this algorithm, we will reach a threshold $\beta$, and decide on that as final.

Next, we will proceed to describe our new algorithm, based on Snowball. There are 3 main paths to achieving the initial target of bypassing the Avalanche patent:

- Find ways to extend the Snowball algorithm.
- Find ways to modify the Snowball algorithm.
- Find ways to strengthen the Snowball algorithm in particular scenarios, or as generic as possible.

In our design, all 3 are attempted.

## Glacier

### Background

We have identified a shortcoming of the Snowball algorithm that was a perfect starting point for devising improvements. The scenario is as follows:

- There is a powerful adversary in the network, that controls a large percentage of the node population: 10% to ~50%.
- This adversary follows a strategy that allows them to rapidly change the decision bit (possibly even in a coordinated way) so as to maximally confuse the honest nodes.
- Under normal conditions, honest nodes will accumulate supermajorities soon enough, and reach the $\beta$ threshold. However, when an honest node performs a query and does not reach the threshold $\alpha$ of responses, the counter will be set to 0.
- The highest threat to Snowball is an adversary that keeps it from reaching the $\beta$ threshold, managing to continuously reset the counter, and steering Snowball away from making a decision.

### Concept

Glacier is an evolution of the Snowball BBA algorithm, in which we tackle specifically the weakness described above. The main focus is going to be the counter and the triggering of the reset. Following, we elaborate the different modifications and features that have been added to the reference algorithm:

1. Instead of allowing the latest evidence to change the opinion completely, we take into account all accumulated evidence, to reduce the impact of high variability when there is already a large amount of evidence collected.
2. Eliminate the counter and threshold scheme, and introduce instead two regimes of operation:
    - One focused on grabbing opinions and reacting as soon as possible. This part is somewhat closer conceptually to the reference algorithm.
    - Another one focused on interpreting the accumulated data instead of reacting to the latest information gathered.
3. Finally, combine those two phases via a transition function. This avoids the creation of a step function, or a sudden change in behavior that could complicate analysis and understanding of the dynamics. Instead, we can have a single algorithm that transfers weight from one operation to the other as more evidence is gathered.
4. Additionally, we introduce a function for weighted sampling. This will allow the combination of different forms of weighting:
    - Staking
    - Heuristic reputation
    - Manual reputation.

It’s worth delving a bit into the way the data is interpreted in order to reach a decision. Our approach is based conceptually on the paper [Confidence as Higher-Order Uncertainty](https://cis.temple.edu/~pwang/Publication/confidence.pdf), which describes a frequentist approach to decision certainty. The first-order certainty, measured by frequency, is caused by known positive evidence, and the higher-order certainty is caused by potential positive evidence. Because confidence is a relative measurement defined on evidence, it naturally follows comparing the amount of evidence the system knows with the amount that it will know in the near future (defining “near” as a constant). 

Intuitively, we are looking for a function of w, call it *c* for confidence, that satisfies the following conditions:

1. Confidence c is a continuous and monotonically increasing function of w. (More evidence, higher confidence.)
2. When w = 0, c = 0. (Without any evidence, confidence is minimum.)
3. When w goes to infinity, c converges to 1. (With infinite evidence, confidence is maximum.)

The paper describes also a set of operations for the evidence/confidence pairs, so that different sources of knowledge could be combined. However, we leave here the suggestion of a possible research line in the future combining an algebra of evidence/confidence pairs with swarm-propagation algorithm like the one described in [this paper](http://replicated.cc/files/schmebulock.pdf).

### Algorithm

The algorithm is divided into 4 phases:

1. **Querying.** We select *k* nodes from the complete pool of peers in the network. This query is weighted, so the probability of selecting nodes is proportional to their weight. 

$$
P(i) = \frac{w_i}{\sum_{j=0}^{j=N}w_j}
$$

The list of nodes is maintained by a separate protocol (the network layer), and eventual consistency of this knowledge in the network suffices. Even if there are slight divergences in the network view from different nodes, the algorithm is resilient to those.

*Adaptive querying*. An additional optimization in the query consists of adaptively growing the *k* constant in the event of *high confusion*. We define high confusion as the situation in which neither opinion is strongly held in a query (*i.e.* a threshold is not reached for either yes or no). For this, we will use the $\alpha$ threshold defined below. This adaptive growth of the query size is done as follows:

- Every time the threshold is not reached, we multiply *k* by a constant. In our experiments, we found that a constant of 2 works well, but what really matter is that it stays within that order of magnitude.
- The growth is capped at 4 times the initial *k* value. Again, this is an experimental value, and could potentially be increased. This depends mainly on complex factors such as the size of the query messages, which could saturate the node bandwidth if the number of nodes queried is too high.
1. **Computing the confidence, evidence and accumulated evidence.** These three ratios are used later on to compute the transition function and the opinion forming. Confidence encapsulates the notion of how much we know (as a node) in relation to how much we will know in the near future (this being encoded in the parameter $l$. Evidence accumulated keeps the ratio of total positive votes vs the total votes received (positive and negative), whereas the evidence per round stores the ratio of the current round only.

$$
l: \text{look-ahead parameter} \\
\alpha_1 = 0.8, \ \alpha_2 = 0.5 \\
\text{confidence}: c_{accum} = \frac{total\ votes}{total\ votes + l} \\
\text{evidence accumulated}: e_{accum} = \frac{total\ positive\ votes}{total\ votes} \\
\text{evidence per round}: e_{round} = \frac{round\ positive\ votes}{round\ votes}
$$

1. **Transition function.** In order to eliminate the need for a step function (a conditional in the code), we introduce a transition function from one regime to the other. Our interest in removing this is twofold:
    - Simplify the algorithm. With this change the number of branches is reduced, and everything is expressed as a set of equations.
    - Second, the transition function makes the regime switch smooth, making it harder to potentially exploit the sudden regime change in some unforeseen manner. Such a swift change in operation mode could potentially result in a more complex behavior than initially understood, opening the door to elaborated attacks. The transition function proposed is linear with respect to the confidence.
    
    $$
    
    e = e_{round} (1-c) + e_{accum} c \\ \alpha = \alpha_1 (1-c) + \alpha_2 c
    
    $$
    
    Since the confidence is modeled as a ratio that depends on the constant $l$, we can visualize the transition function at different values of $l$. Recall that this constant encapsulates the idea of “near future” in the frequentist certainty model: the higher it is, the more distant in time we consider the next valuable input of evidence to happen.
    
    In the following graph four different values of $l$ have been plotted. We observe that for a transition function to be useful, we need establish two requirements:
    
    - First, the change has to be balanced and smooth, giving an opportunity to the first regime to operate and not jump directly to the second regime.
    - Second, the convergence to 1.0 (fully operating in the second regime) should happen within a reasonable time-frame. We’ve set this time-frame experimentally at 1000 votes, which is in the order of ~100 queries given a k=9.
    
    Note: elaborate on the selection of k, diameter of graph, etc.
    
    Note: Avalanche uses k = 20, as an experimental result from their deployment. Due to the fundamental similarities between the algorithms, it’s a good start for us.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4dc70440-75a2-4e2b-bb34-e4b26be7dd94/Untitled.png)
    
2. **Opinion and decision.** The next step is a simple one: change our opinion if the threshold $\alpha$ is reached. This needs to be done separately for the yes/no decision, checking both boundaries. The last step is then to *decide* on the current opinion. For that, a confidence threshold is employed. This threshold is derived from the network size, and is directly related to the number of total votes received.
    
    $$
    e > \alpha \implies \text{opinion YES} \\
    e < 1-\alpha \implies \text{opinion NO} \\
    
    if\ \text{confidence} > c_{target} \implies  \text{decide}
    $$
    
    Note: elaborate on $c_{target}$ selection.
    

**Code**

The following Python code outlines the algorithm 

```python
def init(self):
				self.evidence = (0, 0)
        self.confidence = (0, L)

def step(self):
        if self.color == ConsensusAgent.NONE:
            return

        vote_count = self.query_nodes()
        total_votes = sum(vote_count)
        if total_votes == 0:
            return
        self.evidence = (self.evidence[0] + vote_count[0], self.evidence[1] + total_votes)
        self.confidence = (self.confidence[0] + total_votes, self.confidence[1] + total_votes)

        conf = self.confidence[0] / self.confidence[1]
        e1 = vote_count[0] / total_votes
        e2 = self.evidence[0] / self.evidence[1]
        e = e1 * (1-conf) + e2 * conf
        alpha = self.evidence_alpha * (1-conf) + self.evidence_alpha2 * conf

        if e > alpha:
            self.color = ConsensusAgent.YES
        elif e < 1 - alpha:
            self.color = ConsensusAgent.NO
        else:
            self.k = min(int(self.k * 2), self.initial_k * 4)
```

TODO: Decision

## Experimental results

### Experimental Approach

Unlike classical BFT consensus algorithms, Glacier (as part of the Avalanche family) has complex non-deterministic dynamics. It’s behavior is probabilistic, and thus cannot be proven correct with the techniques employed in those algorithms. Being a complex system, it is particularly useful to simulate and observe from an experimental perspective. Moreover, a direct comparison with Snowball will give us further insights in the behavior of both algorithms.

Simulation of a binary byzantine agreement can be modeled as a cellular automata or a multi-agent system. This is known as *majority problem* or *density classification* in this context. We used [Maofan’s simulation](https://tedyin.com/archive/snow-bft-demo/) as a starting point. A network of nodes can be visualized as a grid (for simplicity, there is no topological correlation with the connections between them), and the colors can depict their opinion/decision.

The following example is a simulation with 6400 nodes running the Glacier BBA algorithm. A stable state is reached when either the Yes or No is held at a 100% of the honest nodes, or when the opinion is divided in a way that neither option is able to win (a bivalent state). In the latter case, we consider that consensus has failed, as no agreement is possible. The only way to reach this situation is by the careful play of an adversary that keeps the system in metastable conditions indefinitely. Without the adversary, the algorithm will always converge to a stable state with all nodes holding the same decision.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aab47549-07be-4ffa-a5a0-6eee92393c10/Untitled.png)

### Adversary Models

Once the algorithm is modeled and observed under normal operating conditions, we aim at exploring the behavior under both adversarial conditions and edge cases (such as nearly bivalent network states). For our experiments, the normal operation conditions with no particular edge case lacks interest, as it invariably converges to the majority opinion very fast.

The adversarial models that have been devised are intended to be as powerful as possible, while still theoretically viable. We selected three of the simulated adversaries for this discussion:

- **Omniscient Adversary.** An omniscient adversary is capable of coordinating all nodes (up to 49%). The target behavior is always to coordinate the opinion of these nodes to be the opposite of the honest majority, in order to swing the opinion of the honest nodes for as long as possible, inducing confusion. This adversary is devised particularly to attack the counter resetting step in the Avalanche algorithm.
- **Aggressive Omniscient Adversary.** This adversary is functionally equivalent to the omniscient adversary, except that nodes it actively push their opinion (by performing queries). This allows malicious nodes to impact the network further and faster (before honest nodes have formed their opinions).
- **Infantile Adversary.** The infantile adversary operates in a similar way, by trying to confuse the honest nodes, keeping the system in a metastable state. However, the infantile adversary does not require coordination between nodes, and they perform their attack just by switching their own opinion to the opposite of what it should be. Their impact is their indirect, as they will potentially swing the opinion of the honest nodes when they are queried later on.

### Results and comparison

Measurements of Time to Finality (TTF) are done by computing stability of the entire system during a sequence of 4 steps with constant counts of Yes/No opinions across the entire system. This method is used instead of triggering finality when the $\beta$  parameter is reached (in Snowball) so that an equivalent measure can be used for comparing Snowball and Glacier.

**Near-bivalent initial state**

This experiment tests the behavior of a fully honest network, in which nearly half of the node population has one opinion and the rest, the opposite opinion. The difference is less than 1% of variation between the two groups. Therefore, the experiment tests how well the system gets out of the metastable condition, or if it gets stuck in it.

In these experiments we can observe that the most robust results for Snowball come from a 0.7 and 0.8 alpha value, which matches the common values used by Avalanche. In the case of Avalanche, the most relevant parameter to identify in the parameter sweep is the look-ahead $l$. Values 5, 10 and 30 show robust results, but breaks down under higher values, like 100.

![Snowball (Near-bivalent state. Normal Operation.) -1 corresponds to failure to stabilize.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8dc11bc2-b4c6-4863-912c-d6f2f897a606/Untitled.png)

Snowball (Near-bivalent state. Normal Operation.) -1 corresponds to failure to stabilize.

![Glacier (Near-bivalent state. Normal Operation.) -1 corresponds to failure to stabilize. 4 configurations of the look-ahead parameter are used.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3a114ab4-f9fd-4ee4-aeb1-46b38483bd33/Untitled.png)

Glacier (Near-bivalent state. Normal Operation.) -1 corresponds to failure to stabilize. 4 configurations of the look-ahead parameter are used.

**Adversaries**

The following experiments simulate the aforementioned adversaries. We compare side by side, Snowball and Glacier. In the case of Glacier different configurations of the look-ahead parameter are tested.

![Snowball (Omniscient Adversary)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2ddc54f0-3d0e-4219-8059-6270ce6a0ac3/Untitled.png)

Snowball (Omniscient Adversary)

![Glacier (Omniscient Adversary)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76483361-0168-4385-bb25-0d92524838e0/Untitled.png)

Glacier (Omniscient Adversary)

Glacier behaves consistently better than Snowball against the omniscient adversary, with a clear preference for higher look-ahead values. TTF is reduced, and the number of failed consensus after a threshold limit is reduced considerably in Glacier.

![Snowball (Aggressive-Omniscient Adversary)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b9f7f995-d057-4f6e-9493-09a52951879b/Untitled.png)

Snowball (Aggressive-Omniscient Adversary)

![Glacier (Aggressive Omniscient Adversary)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/636ba3ac-7c28-40d5-b464-5faa162b0f9d/Untitled.png)

Glacier (Aggressive Omniscient Adversary)

Glacier also outperforms Snowball in this experiment, that breaks it consistently even with a low number of byzantine nodes. This aggressive strategy manages to confuse Snowball dramatically, leading the network to a bivalent state early on. In the case of Glacier, consensus is reached far more consistently and earlier on. In this case, the look-ahead parameter works well until 30, with a value of 100 showing worse results than lower values.

![Snowball (Infantile Adversary)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/92fa2875-f2c4-4eec-99a6-72cc2a067808/Untitled.png)

Snowball (Infantile Adversary)

![Glacier (Infantile Adversary)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3b5d5fb5-e6ae-4917-a3e7-1d09e52f37ff/Untitled.png)

Glacier (Infantile Adversary)

The infantile adversary is also more effective against Snowball than Glacier. We observe once again that higher values of the look-ahead parameter produce more stable results in Glacier.

**Conclusion**

We can conclude that Glacier performs better than Snowball in all these experiments, with a sweet spot for the look-ahead parameter of 30 for the given network size. The exact number could be refined with further experiments, and requires further analytical analysis for deeper understanding.

## DAG

The direct acyclic graph (DAG) construction for the full state machine replication protocol (beyond the single bit) requires adaptation from the Avalanche model. Snowball is extended to a DAG by means of chits (obtained by supermajority in a round), that get accumulated per vertex. These chits are the tie-breaker for incompatible transactions in the DAG. In the Glacier model, the cumulative approach requires a different type of integration in the DAG. These are the rules for conflict resolution and DAG construction with Glacier.

- Evidence and confidence is accumulated in all parents of a new transaction transitively. These counters are monotonically increasing. This is similar to the way chits are computed in Avalanche, but with two counters instead of one, and adding totals.
- Choice of transaction (ie. fork-choice rule) is done as follows:
    - Highest total positive evidence wins (higher positive votes / total votes ratio).
    - When a vertex reaches the confidence threshold, it is considered finalized if $e > \alpha_1$ (ie. *confident supermajority*).
    - If the confidence threshold is reached and the inequality is not fulfilled, wait until all conflicting transactions reach the confidence threshold. Then select the one with the highest evidence.
        
        ![Example DAG. The value on top is the evidence gathered by the vertex, the lower tuple is (accumulated evidence, accumulated confidence) of the vertex. The look-ahead value is set to 1 for simplicity.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1393f074-7886-4931-8b29-fc8c44a92c91/dag_glacier.png)
        
        Example DAG. The value on top is the evidence gathered by the vertex, the lower tuple is (accumulated evidence, accumulated confidence) of the vertex. The look-ahead value is set to 1 for simplicity.
        

Note that the DAG formation uses a simpler method than the Binary Agreement. The only thing that matters for the conflict resolution in the long run is the accumulated evidence/confidence. In practice this means that before finalization, the local option (sent in query replies), might not match the most supported in the DAG. However, the DAG and the local opinion converge always. This decoupling is what allows for faster reaction to rapid changes in the supported branch tips, while still providing the stabilization properties of the vote accumulation approach. 

Note: analyze flip flop scenario of near-finalized forks.

## Future Work

- Mathematical proof
- Define optimal confidence threshold in relation to network size (analytically and/or experimentally). Define optimal look-ahead parameter value.
- Define specific weighted sampling function using staking, heuristic reputation and manual reputation.
- Review confidence values (100 iterations?)
- Figure out reasonable starting values for validators (like cost)
- Tests: focus on invariants of the algorithm throughout different stages. Check these invariants in code.
