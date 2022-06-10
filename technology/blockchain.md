---
title: The Logos Blockchain Network
---
# The Logos Blockchain Network
The Logos Blockchain Network is a heterogeneous blockchain network, specifically designed to enable communities to have digital infrastructure that is not only appropriate for them, but also owned by them. 

This endeavor is currently under a heavy research phase as we explore the current best practices and possibilities that are under development or available across the industry. 

## Motivation

We find it useful to define a list of use cases that the technology should fulfill.

### Use cases

The main use case of the blockchain network infrastructure is to provide support for bootstrapping and maintaining **Common Interest Communities (CIC)**. CICs have the following key characteristics:

-   We expect the range of network sizes to be wide. We can expect some CICs to be in the scale ~10 nodes, while others could (potentially) scale up to current blockchain limits.
-   CICs will have varying degrees of inter-communication. Some will be existing in relative isolation (ie. no communication), while others could be very interdependent.
-   Some CICs will exist as part of the Status Network (_i.e._ the Status Communities product), while others could exist completely independently as a separate infrastructure. In other words, the stark requirement to participate in a central network would be lifted. 

In order to fulfill these use cases, we now define a set of requirements the blockchain technology should conform to.

### Requirements

-   **Must-have.** These requirements are non-negotiable, fundamental to satisfying the use cases.
    -   **Sybil Resistant.** This is a fundamental requirement of any blockchain design, but we list it here as it is unique in our case. We potentially need to support different models of sybil resistance depending on the scale of the network, and for bootstrapping purposes.
    -   **Crash & Byzantine Fault Tolerant.** These are fundamental requirements in a public blockchain.
    -   **Fast Finality (ideally sub-second, or in the 2 sec range).** It is fundamental to the usability of the blockchain, and something within our reach considering the current state of the art (Avalanche).
    -   **Leaderless / Weak Leadership**. In order to keep the network as decentralized as possible, we aim at mitigating the centralization effects of strong leadership (like leader selection algorithms).
    -   **Individual participant scale ~ constant with respect to network size.** in similar spirit to the leaderless or weak leadership requirement, we establish the need to allow participants in the network to have the feel impact regardless of the scale of the network. In other words, the resources consumed for any given network decision should not vary in accordance to network size.
    -   **Suitable for “social applications” (fast and efficient, modest computational resources).** It is key that we steer away from the centralization effects of high computation requirements.
    -   **Ability to transition from a low node count to a large node count.** This is an important technical requirement in order to fulfill the use cases. The general idea is to be able to support networks from their inception at low scales to their growth and expansion phase.
    -   **Ability to bootstrap small networks.** Either from scratch or as spin-off of a larger network. Closely related to the previous requirement, this refers to the process of growth from low to high scale networks, in a smooth manner.
-   **Desirable or to be explored.** These requirements are initially considered as relevant to matching the use cases, but they aren’t required per se.
    -   **Round-less.** This is usually associated to the lack of a leader election and distinct protocol phases as usually seen in classical BFT variants.
    -   **Probabilistic.** Not a requirement per se, but a likely condition to achieve substantial improvements over classical BFT. The choice of a probabilistic approach to consensus is key in the Avalanche algorithm to achieve state of the art performance.
    -   **Strong liveness (at the expense of partition tolerance).** A strongly live system makes progress under network partitioning conditions, and later on reconciles the forks.
    -   **Asynchronous.** This is also associated with partition tolerance, in the sense that a chain can make progress even if a substantial part of the network is out of reach.
    -   **Decoupled execution layer (as much as possible).** This is to allow for execution models to be interchangeable and/or extensible.
    -   Explore the possibility of **highly partitioned blockchains with local views**. This takes inspiration from the Tangle (IOTA) and Hashgraph. The idea would be to explore these key points:
        -   Could clients participate in consensus as well, in a very lightweight manner, by just synchronizing a small part of the blockchain.
        -   By the same token, this would bring many partial local chains, perhaps only updated on-demand. Potentially client nodes can do this in a different way than verifier nodes, that hold larger portions of the blockchain.

## Technicals

As we harden our confidence around the various protocols that will come together to meet these requirements, we will update this site. Please check back regularly to learn more about how this network will be built. 

Our intention is to be as rigorous and open as possible. You can read about [our development methodology](./process) to learn how we plan to make good on those intentions. 