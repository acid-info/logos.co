Waku v2

    Status: draft
    Editor: Oskar Thorén oskar@status.im
    Contributors: Sanaz Taheri sanaz@status.im , Hanno Cornelius hanno@status.im , Reeshav Khan reeshav@status.im

Abstract #

Waku v2 is family of modular peer-to-peer protocols for secure communication. The protocols are designed to be secure, privacy-preserving, censorship-resistant and being able to run in resource restricted environments. At a high level, it implements Pub/Sub over libp2p and adds a set of capabilities to it. These capabilities are things such as: (i) retrieving historical messages for mostly-offline devices (ii) adaptive nodes, allowing for heterogeneous nodes to contribute to the network (iii) preserving bandwidth usage for resource-restriced devices

This makes Waku ideal for running a p2p protocol on mobile and in similarly restricted environments.

Historically, it has its roots in Waku v1, which stems from Whisper, originally part of the Ethereum stack. However, Waku v2 acts more as a thin wrapper for PubSub and has a different API. It is implemented in an iterative manner where initial focus is on porting essential functionality to libp2p. See rough road map (2020) for more historical context.
Motivation and goals #

Waku as a family of protocols is designed to have a set of properties that are useful for many applications:

    Useful for generalized messaging.

Many applications require some form of messaging protocol to communicate between different subsystems or different nodes. This messaging can be human-to-human or machine-to-machine or a mix. Waku is designed to work for all these scenarios.

    Peer-to-peer.

Applications sometimes have requirements that make them suitable for peer-to-peer solutions:

    Censorship-resistant with no single point of failure
    Adaptive and scalable network
    Shared infrastructure

    Runs anywhere.

Applications often run in restricted environments, where resources or the environment is restricted in some fashion. For example:

    Limited bandwidth, CPU, memory, disk, battery, etc
    Not being publicly connectable
    Only being intermittently connected; mostly-offline

    Privacy-preserving.

Applications often have a desire for some privacy guarantees, such as:

    Pseudonymity and not being tied to any personally identifiable information (PII)
    Metadata protection in transit
    Various forms of unlinkability, etc

    Modular design.

Applications often have different trade-offs when it comes to what properties they and their users value. Waku is designed in a modular fashion where an application protocol or node can choose what protocols they run. We call this concept adaptive nodes.

For example:

    Resource usage vs metadata protection
    Providing useful services to the network vs mostly using it
    Stronger guarantees for spam protection vs economic registration cost

For more on the concept of adaptive nodes and what this means in practice, please see the 30/ADAPTIVE-NODES spec.
Network interaction domains #

While Waku is best thought of as a single cohesive thing, there are three network interaction domains:

(a) gossip domain (b) discovery domain (c) req/resp domain
Protocols and identifiers #

Since Waku v2 is built on top of libp2p, many protocols have a libp2p protocol identifier. The current main protocol identifiers are:

    /vac/waku/relay/2.0.0
    /vac/waku/store/2.0.0-beta4
    /vac/waku/filter/2.0.0-beta1
    /vac/waku/lightpush/2.0.0-beta1

This is in addition to protocols that specify messages, payloads, and recommended usages. Since these aren’t negotiated libp2p protocols, they are referred to by their RFC ID. For example:

    14/WAKU2-MESSAGEand 26/WAKU2-PAYLOAD for message payloads
    23/WAKU2-TOPICS and 27/WAKU2-PEERS for recommendations around usage

There are also more experimental libp2p protocols such as:

    /vac/waku/swap/2.0.0-beta1
    /vac/waku/waku-rln-relay/2.0.0-alpha1

These protocols and their semantics are elaborated on in their own specs.

In addition, Waku v2 MAY make use of libp2p ping protocol with protocol id

/ipfs/ping/1.0.0

for liveness checks between peers, or to keep peer-to-peer connections alive.
Use of libp2p and protobuf #

Unless otherwise specified, all protocols are implemented over libp2p and use Protobuf by default. Since messages are exchanged over a bi-directional binary stream, as a convention, libp2p protocols prefix binary message payloads with the length of the message in bytes. This length integer is encoded as a protobuf varint.
Gossip domain #

Waku is using gossiping to disseminate messages throughout the network.

Protocol identifier: /vac/waku/relay/2.0.0

See 11/WAKU2-RELAY spec for more details.

For an experimental privacy-preserving economic spam protection mechanism, see 17/WAKU2-RLNRELAY.

See 23/WAKU2-TOPICS for more information about recommended topic usage.
Transports #

Waku v2 is built in top of libp2p, and like libp2p it strives to be transport agnostic. We define a set of recommended transports in order to achieve a baseline of interoperability between clients.

This section describes these recommended transports.

Waku client implementations SHOULD support the TCP transport.

Where TCP is supported it MUST be enabled for both dialing and listening, even if other transports are available.

Waku v2 nodes where the environment do not allow to use TCP directly, MAY use other transports.

A Waku v2 node SHOULD support secure websockets for bidirectional communication streams, for example in a web browser context.

A node MAY support unsecure websockets if required by the application or running environment.
Discovery domain #
Discovery methods #

Waku v2 can retrieve a list of nodes to connect to using DNS-based discovery as per EIP-1459. While this is a useful way of bootstrapping connection to a set of peers, it MAY be used in conjunction with an ambient peer discovery procedure to find still other nodes to connect to, such as Node Discovery v5. More ambient peer discovery methods are being tested for Waku v2, and will be specified for wider adoption. It is possible to bypass the discovery domain by specifying static nodes.
Use of ENR #

31/WAKU2-ENR describes the usage of EIP-778 ENR (Ethereum Node Records) for Waku v2 discovery purposes. It introduces two new ENR fields, multiaddrs and waku2, that a Waku v2 node MAY use for discovery purposes. These fields MUST be used under certain conditions, as set out in the spec. Both EIP-1459 DNS-based discovery and Node Discovery v5 operates on ENR, and it’s reasonable to expect even wider utility for ENR in Waku v2 networks in future.
Request/Reply domain #

In addition to the Gossip domain, Waku provides a set of Request/Reply protocols. They are primarily used in order to get Waku to run in resource restricted environments, such as low bandwidth or being mostly offline.
Historical message support #

Protocol identifier*: /vac/waku/store/2.0.0-beta4

This is used to fetch historical messages for mostly offline devices. See 13/WAKU2-STORE spec for more details.

There is also an experimental fault-tolerant addition to the store protocol that relaxes the high availability requirement. See 21/WAKU2-FT-STORE
Content filtering #

Protocol identifier*: /vac/waku/filter/2.0.0-beta1

This is used to make fetching of a subset of messages more bandwidth preserving. See 12/WAKU2-FILTER spec for more details.
Light push #

Protocol identifier*: /vac/waku/lightpush/2.0.0-beta1

This is used for nodes with short connection windows and limited bandwidth to publish messages into the Waku network. See 19/WAKU2-LIGHTPUSH spec for more details.
Other protocols #

The above is a non-exhaustive list, and due to the modular design of Waku there may be other protocols here that provide a useful service to the Waku network.
Overview of protocol interaction #

See the sequence diagram below for an overview of how different protocols interact.
