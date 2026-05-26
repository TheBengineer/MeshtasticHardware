const projects = [
    {
        name: "Faketec",
        category: "radio",
        icon: "F",
        status: "released",
        description: "A low-cost nRF52 device with Heltec form-factor",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "USB-C"],
        links: {
            repository: "https://github.com/gargomoma/fakeTec_pcb",
            documentation: "https://github.com/gargomoma/fakeTec_pcb",
            purchase: "https://github.com/gargomoma/fakeTec_pcb"
        }
    },
    {
        name: "xiaoWa",
        category: "radio",
        icon: "小瓦",
        status: "released",
        description: "A small 1W node pcb compatible with E22, E22P and E80 ",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "USB-C", "1W"],
        links: {
            repository: "https://github.com/gargomoma/xiaoWa_pcb",
            documentation: "https://github.com/gargomoma/xiaoWa_pcb",
            purchase: "https://github.com/gargomoma/xiaoWa_pcb"
        }
    },
    {
        name: "MASN",
        category: "radio",
        icon: "☀️",
        status: "released",
        description: "A Simple and Open-Source Solar Node for Meshtastic",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "USB-C"],
        links: {
            repository: "https://github.com/danielcharrua/masn-meshtastic-autonomous-solar-node",
            documentation: "https://github.com/danielcharrua/masn-meshtastic-autonomous-solar-node",
            purchase: "https://github.com/danielcharrua/masn-meshtastic-autonomous-solar-node"
        }
    },
    {
        name: "MeshAdventurer",
        category: "radio",
        icon: "🚙",
        status: "released",
        description: "1W node for automotive mounting",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "USB-C", "1W"],
        links: {
            repository: "https://github.com/chrismyers2000/MeshAdventurer",
            documentation: "https://github.com/chrismyers2000/MeshAdventurer",
            purchase: "https://github.com/chrismyers2000/MeshAdventurer"
        }
    },
    {
        name: "Hydra ",
        category: "radio",
        icon: "🐉",
        status: "released",
        description: "A small 1W node pcb compatible with E22, E22P and E80 ",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "USB-C", "1W"],
        links: {
            repository: "https://github.com/Hydra-Designs/project-hydra-meshtastic-pcb",
            documentation: "https://github.com/Hydra-Designs/project-hydra-meshtastic-pcb",
            purchase: "https://github.com/Hydra-Designs/project-hydra-meshtastic-pcb/blob/main/ordering.md"
        }
    },
    {
        name: "MeshTadpole",
        category: "radio",
        icon: "🐸",
        status: "released",
        description: "A compact usb-modem for MeshCore and Meshtastic",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["ESP32", "SX1262", "USB-C"],
        links: {
            repository: "#",
            documentation: "https://www.reddit.com/r/meshtastic/comments/1muclb4/now_available_meshtadpole_160mw_22dbm_a_lora/",
            purchase: "https://www.etsy.com/listing/4335650077/meshtadpole-160mw-22dbm-a-lora-915mhz"
        }
    },
    {
        name: "MeshToad",
        category: "radio",
        icon: "🐸",
        status: "released",
        description: "A compact 1W usb-modem for MeshCore and Meshtastic",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["ESP32", "SX1262", "USB-C", "1W"],
        links: {
            repository: "https://oshwlab.com/mtnmesh/meshtoad-v1-2",
            documentation: "https://mtnme.sh/devices/MeshToad/",
            purchase: "https://www.etsy.com/listing/4336679696/meshtoad-v20-1w-30dbm-a-lora-915mhz"
        }
    },
    {
        name: "NRF-TXT",
        category: "device",
        icon: "⌨️",
        status: "released",
        description: "Standalone Meshtastic communicator (Heltec T114 V2)",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["NRF52", "SX1262", "Keyboard",],
        links: {
            repository: "https://www.printables.com/model/1083609-nrf-txt-standalone-meshtastic-communicator-heltec",
            documentation: "https://www.printables.com/model/1083609-nrf-txt-standalone-meshtastic-communicator-heltec",
            purchase: "https://www.etsy.com/listing/1873027341/nrf-txt-most-advanced-stand-alone"
        }
    },
    {
        name: "BirbMesh-One",
        category: "radio",
        icon: "🐦",
        status: "released",
        description: "Compact 1W low power Node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["NRF52", "SX1262"],
        links: {
            repository: "https://github.com/KokoSoft/BirbMesh-One",
            documentation: "https://github.com/KokoSoft/BirbMesh-One",
            purchase: "https://www.etsy.com/listing/1873027341/nrf-txt-most-advanced-stand-alone"
        }
    },
    {
        name: "FemtoFox",
        category: "radio",
        icon: "🦊",
        status: "released",
        description: "Micro Linux based Node with Ethernet",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "SX1262", "Ethernet", "Luckfox Pico Mini"],
        links: {
            repository: "https://github.com/femtofox/femtofox",
            documentation: "https://github.com/femtofox/femtofox",
            purchase: "https://www.etsy.com/listing/1861858340/femtofox-pro-alpha-v11-kit-compact-arm"
        }
    },
    {
        name: "WashTastic",
        category: "radio",
        icon: "W",
        status: "released",
        description: "1W node based on E22-90030S and promicro nrf52",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "SX1262", "Ethernet", "Luckfox Pico Mini"],
        links: {
            repository: "https://github.com/valzzu/meshtastic-pcbs/tree/main/WashTastic",
            documentation: "https://github.com/valzzu/meshtastic-pcbs/tree/main/WashTastic",
            purchase: "https://github.com/valzzu/meshtastic-pcbs/tree/main/WashTastic"
        }
    },
    {
        name: "Flushable",
        category: "radio",
        icon: "F",
        status: "prototype",
        description: "Meshtastic wearable node?",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["NRF52", "SX1262", "Wearable"],
        links: {
            repository: "https://github.com/valzzu/meshtastic-pcbs/tree/main/Flushable",
            documentation: "https://github.com/valzzu/meshtastic-pcbs/tree/main/Flushable",
            purchase: "https://github.com/valzzu/meshtastic-pcbs/tree/main/Flushable"
        }
    },
    {
        name: "PiTastic",
        category: "radio",
        icon: "🥧",
        status: "released",
        description: "1W raspberry pi hat",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nrf52", "SX1262", "1W", "Raspberry Pi", "Hat"],
        links: {
            repository: "https://github.com/valzzu/meshtastic-pcbs/tree/main/PiTastic",
            documentation: "https://github.com/valzzu/meshtastic-pcbs/tree/main/PiTastic",
            purchase: "https://github.com/valzzu/meshtastic-pcbs/tree/main/PiTastic"
        }
    },
    {
        name: "FrameTastic",
        category: "radio",
        icon: "F",
        status: "released",
        description: "FrameWork laptop lora expansion module",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Framework"],
        links: {
            repository: "https://github.com/valzzu/meshtastic-pcbs/tree/main/FrameTastic",
            documentation: "https://github.com/valzzu/meshtastic-pcbs/tree/main/FrameTastic",
            purchase: "https://github.com/valzzu/meshtastic-pcbs/tree/main/FrameTastic"
        }
    },
    {
        name: "Heltec V3 Case",
        category: "case",
        icon: "🧳",
        status: "released",
        description: "The original case design that started it all",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Case", "Heltec"],
        links: {
            repository: "https://www.printables.com/model/741974-h1-case-for-heltec-v3-running-meshtastic",
            documentation: "https://www.printables.com/model/741974-h1-case-for-heltec-v3-running-meshtastic",
            purchase: "https://www.printables.com/model/741974-h1-case-for-heltec-v3-running-meshtastic"
        }
    },
    {
        name: "H1 Big Case",
        category: "case",
        icon: "🧳",
        status: "released",
        description: "Heltec compatible case for larger batteries",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Case", "Heltec"],
        links: {
            repository: "https://www.printables.com/model/976200-h1-big-case-for-heltec-v3-running-meshtastic",
            documentation: "https://www.printables.com/model/976200-h1-big-case-for-heltec-v3-running-meshtastic",
            purchase: "https://www.printables.com/model/976200-h1-big-case-for-heltec-v3-running-meshtastic"
        }
    },
    {
        name: "Heltec Pager",
        category: "case",
        icon: "🧳",
        status: "released",
        description: "Pager style case for Heltec compatible nodes",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Case", "Heltec"],
        links: {
            repository: "https://www.printables.com/model/936466-pager-style-holster-for-the-muziworks-h1-heltec-v3",
            documentation: "https://www.printables.com/model/936466-pager-style-holster-for-the-muziworks-h1-heltec-v3",
            purchase: "https://www.printables.com/model/936466-pager-style-holster-for-the-muziworks-h1-heltec-v3"
        }
    }
];
