---
title: Process
sidebar_position: 7
description: Research Process for the Logos Network
og:image_subtitle: logos.co
---

We build public good protocols for everyone, then implement them the way that works for us.

Public goods are for the people, and thus should be owned and controlled by them. How they are built influences this outcome. To this end, we have come up with a process that helps to ensure that the products of our effort are not solely controlled by us and our potentially limited self-interests and opinions. 

In a nutshell, Logos projects will work hand-in-hand with our sister research organization, Vac, to create agnostic protocols for everyone to share and contribute to. You can read more about Vac and their mission [here](https://vac.dev). 

The general flow of how a given project within Logos collaborates with Vac is summarized in the following diagram. 

```mermaid
flowchart
    O1[Unopinionated Protocols]
    O2[Users]
    subgraph Project
    L1[Engineering]-->|Delivers|L2[Opinionated Products]
    L3[Research]-->|Delivers|L4[PoC Implementation]
    end

    subgraph Vac 
    V1[Principles]-->|Aligns|V2[Agnostic Specifications]
    V3[Protocol Development Process]-->|Structures|V2
    click V3 "https://rfc.vac.dev" "Specifications"
    click V1 "https://status.im/about/" "Principles"
    end
    
    L3-->|Delivers|V2
    V2-->|Informs|L1
    V2-->|Allow for|O1
    L2-->|Serves|O2
    O2-->|Provides user feedback to|L1
    L1-->|Updates|V2
```

A Logos project will perform research on a problem. Their initial deliverables will be a Proof of Concept (PoC) and a set of specifications that detail explicitly how that solution is built. Vac will provide resources to the Logos project by facilitating in the process writing and hardening the specifications being developed. 

In addition to helping in the process of spec writing, they also serve as an embodiment of the foundational principles that maintain the ethical development of public good infrastructure. This means that specifications written, developed, and housed with Vac are not tied to any given chain, biased ideology, and the subsequent control that comes from it. These specifications can then be used by the general public in any way they see fit, free and open source. 

The Logos project will then pull back an opinionated view of these specifications to implement their vision of how the product should be built for their particular use case. 

This process is our commitment to build in the open and work to maintain an ethos of building for the public good while also allowing ourselves to create opinionated products that suit our specific needs.