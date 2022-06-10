## **Logos is building a complete decentralised infrastructure stack - for everyone.**

Advancements in cryptography and peer-to-peer networking have unlocked the possibility of re-imagining the public internet infrastructure that we conduct our lives upon. These technologies allows us to drastically increase the cost of surveillance, censorship and coercion as a means of safeguarding our freedoms.

The experiment begins with a decentralised autonomous organisation (DAO) dedicated to the construction of its user-owned, self-sovereign crypto network. The network is comprised of three primary modular peer-to-peer protocols for communication, file storage and trustless agreement.

Together these form the foundation required for the next-generation of voluntary governing services and social institutions to emerge.

![](logos-overview-graphic.jpg)

**Logos** - *The trustless agreements layer*. 

The first primary protocol of Logos is Logos Blockchain: a heterogeneous blockchain network utilizing its own consensus algorithm to provide fast, scalable and secure trustless agreement, with near-instant transaction finality in user-defined execution environments.

The first two client implementations will be written in Nim and Rust once our first specification has been published.

**Waku** - *The ephemeral communication layer.*

Waku is a peer-to-peer communication layer. Waku removes centralized third parties from messaging - enabling private, secure, censorship-resistant communication. Waku is designed for generalized messaging, enabling both human-to-human or machine-to-machine communication.

Waku has its origins in Ethereum’s Whisper protocol, but is optimized for scalability and better usability. Waku is in production and is actively being used by projects like [Status](https://status.im/) and [WalletConnect](https://walletconnect.com/). Waku’s economic spam protection is still under research, and a paper published on the topic can be found [here](https://raw.githubusercontent.com/vacp2p/research/master/rln-research/Waku_RLN_Relay.pdf).

[[Current Specification]](https://rfc.vac.dev/spec/6/) [[Research Forum]](https://forum.vac.dev/) [[Github]](https://github.com/vacp2p/)

**Codex** - *The storage layer.* 

Codex is a decentralised storage protocol for durable information. Whilst p2p storage networks have been around for quite a long time, the lack of incentives, strong data availability, and durability guarantees make these networks unsuitable for a wide array of applications. In other words, without durability at the storage layer, it is impossible to build other reliable applications.

Codex aims to solve this by supplying an incentivized p2p storage network with strong availability and durability guarantees, and a resource restricted friendly protocol that can endure higher levels of churn and large amounts of ephemeral devices. Codex has a working Proof-of-Concept.

[[Github]](https://github.com/status-im/codex-research) [[PoC] ](https://github.com/status-im/nim-codex)

---

## Our Development Process

We aim to create this technology stack out in the open, and as public goods. Check out the [process](./process) section to learn more about how we aim to do that. 

---

Logos is not yet in production across every protocol in its stack. A number of research and engineering problems remain. We have no disillusions to the magnitude of the undertaking, and the work still ahead of us. We invite anyone who is serious about contributing research or to its code-base to join the community and get involved.

[Join the Logos Public Chat]