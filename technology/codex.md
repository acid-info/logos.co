## **Logos is an experiment to will web3 into existence.**

The Logos Web3 Stack

Logos has the ambitious goal of creating a complete p2p infrastructure stack - with modular protocols for communication, file storage, and smart contracts. 
These form its three primary protocols, which together will allow for the creation of truly unstoppable, peer-to-peer applications.


```logos-diagram
+--------------------------------------------------------+          +------------------------------------------------------+
|                                                        |          |                                                      |
|                                                        |          |                                                      |
|                          VAC                           |          |                       CODEX                          |
|                                                        |          |        +--------------+                              |
|                                                        |          |        |              |                              |
|    +----------------+          +------------------+    |          |        |              |                              |
|    |                |          |                  |    |          |        |              |                              |
|    |                |          |    PROTOCOL      |    |    +-----+--------+   RESEARCH   |                              |
|    |   PRINCIPLES   +-----+----+    DEVELOPMENT   |    |    |     |        |              |                              |
|    |                |     |    |    PROCESS       |    |    |     |        |              |            +-------------+   |
|    |                |     |    |                  |    |    |     |        |              |            |             |   |
|    +----------------+     |    +------------------+    |    |     |        +--------------+            |             |   |
|                           |                            |    |     |                                    | OPINIONATED |   |
|                           |                            |    |     |                             +------>  PRODUCTS   |   |
|                           |                            |    |     |                             |      |             |   |
|                           |                            |    |     |        +--------------+     |      |             |   |
|             +-------------v---------------+            |    |     |        |              |     |      |             |   |
|             |                             <------------+----+     |        |              |     |      +-------------+   |
|             |                             |            |          |        |              +-----+                        |
|             |   AGNOSTIC SPECIFICATIONS   |            |          |        | ENGINEERING  |                              |
|             |                             +------------+----------+-------->              |                              |
|             |                             |            |          |        |              |                              |
|             +-------------+---------------+            |          |        |              |                              |
|                           |                            |          |        +--------------+                              |
|                           |                            |          |                                                      |
|                           |                            |          |                                                      |
+---------------------------+----------------------------+          +------------------------------------------------------+
                            |
                            |
                            |
                            |
                            v
              +----------------------------+
              |                            |
              |                            |
              |  UNOPINIONATED PROTOCOLS   |
              |                            |
              |                            |
              +----------------------------+

```

**Logos** - *The consensus layer*. 

Logos Blockchain is a heterogeneous blockchain network.

The third component of the Logos’ stack is a blockchain network that aims to provide fast, scalable and secure smart contracts, with near-instant 
transaction finality.We’re developing a leaderless consensus algorithm, which is currently under active research. Our current repos and tests are 
set to private until the research begins to mature slightly, but are available on request.

The first two client implementations will be written in Nim and Rust. The same team developing [Nimbus](https://nimbus.team/) one of the leading Ethereum Consensus Clients, 
will expand its resources to take on the Nim implementation once the first specification has been published.


[Research Paper] [Tests]

**Waku** - *The communication layer.*

Waku is a peer-to-peer communication layer.
\The first protocol in Logos’ stack is Waku, which has its origins in Ethereum’s Whisper protocol, but is optimized for scalability and better usability. 
Waku removes centralized third parties from messaging - enabling private, secure, censorship-free communication. 
Waku is designed for generalized messaging, enabling both human-to-human or machine-to-machine communication.
Waku is in production and is actively being used by projects like [Status](https://www.status.im) and [WalletConnect v2.](https://walletconnect.com/) 
It’s economic spam protection is still under research, and a paper published on the topic can be found [here](https://raw.githubusercontent.com/vacp2p/research/master/rln-research/Waku_RLN_Relay.pdf)
[Current Specification](https://rfc.vac.dev/spec/6/) [Research Forum](https://forum.vac.dev/) [Github](https://github.com/vacp2p/)


**Codex** - *The storage layer.* 

Codex is a decentralized file storage network.

Whilst p2p storage networks have been around for quite a long time, the lack of incentives, strong data availability, and persistence guarantees make 
these networks unsuitable for applications with moderate to high availability requirements. In other words, without reliability at the storage layer it is 
impossible to build other reliable applications on top of it. Codex aims to solve this by supplying:

• An incentivized p2p storage network with strong availability and persistence guarantees.
• A resource restricted friendly protocol that can endure higher levels 
of churn and large amounts of ephemeral devices.
Codex has a working PoC, as is expected to be in production by 2023.

[WIP Specification](https://github.com/status-im/dagger-research) [MVP] [Github]



Logos is not yet in production across every protocol in its stack. A number of research and engineering problems remain. We have no disillusions to 
the magnitude of the undertaking, and the work still ahead of us. We invite anyone who is serious about contributing research or to its code-base to 
join the community and get involved.

[Developer Docs]
