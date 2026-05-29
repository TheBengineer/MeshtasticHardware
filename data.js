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
    },
    {
        name: "Sidekick v1",
        category: "radio",
        icon: "S",
        status: "released",
        description: "nRF52840 breakout board for Meshtastic",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "USB-C"],
        links: {
            repository: "https://github.com/NomDeTom/NiceRa/tree/main/Sidekick%20Breakout%20V1.0",
            documentation: "https://github.com/NomDeTom/NiceRa/tree/main/Sidekick%20Breakout%20V1.0",
            purchase: "https://github.com/NomDeTom/NiceRa"
        }
    },
    {
        name: "Sidekick v1.2 LDO",
        category: "radio",
        icon: "S",
        status: "released",
        description: "nRF52840 breakout board with LDO regulator",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "USB-C"],
        links: {
            repository: "https://github.com/NomDeTom/NiceRa/tree/main/Sidekick%20Breakout%20V1.2%20LDO",
            documentation: "https://github.com/NomDeTom/NiceRa/tree/main/Sidekick%20Breakout%20V1.2%20LDO",
            purchase: "https://github.com/NomDeTom/NiceRa"
        }
    },
    {
        name: "Sidekick v2",
        category: "radio",
        icon: "S",
        status: "released",
        description: "nRF52840 breakout board v2",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "USB-C"],
        links: {
            repository: "https://github.com/NomDeTom/NiceRa/tree/main/Sidekick%20Breakout%20V2.0",
            documentation: "https://github.com/NomDeTom/NiceRa/tree/main/Sidekick%20Breakout%20V2.0",
            purchase: "https://github.com/NomDeTom/NiceRa"
        }
    },
    {
        name: "Sidekick v2.1",
        category: "radio",
        icon: "S",
        status: "released",
        description: "nRF52840 breakout board v2.1",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "USB-C"],
        links: {
            repository: "https://github.com/NomDeTom/NiceRa/tree/main/Sidekick%20Breakout%20V2.1",
            documentation: "https://github.com/NomDeTom/NiceRa/tree/main/Sidekick%20Breakout%20V2.1",
            purchase: "https://github.com/NomDeTom/NiceRa"
        }
    },
    {
        name: "Liberty MeshMess",
        category: "radio",
        icon: "L",
        status: "released",
        description: "1W Raspberry Pi HAT LoRa node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "SX1262", "1W", "Raspberry Pi", "Hat"],
        links: {
            repository: "https://github.com/NomDeTom/Liberty_MeshMess",
            documentation: "https://github.com/NomDeTom/Liberty_MeshMess",
            purchase: "https://github.com/NomDeTom/Liberty_MeshMess"
        }
    },
    {
        name: "HT-CT62 USB",
        category: "radio",
        icon: "H",
        status: "released",
        description: "ESP32-C3 node using HT-CT62 module",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["ESP32-C3", "SX1262", "USB-C"],
        links: {
            repository: "https://github.com/NomDeTom/HT-CT62_USB",
            documentation: "https://github.com/NomDeTom/HT-CT62_USB",
            purchase: "https://github.com/NomDeTom/HT-CT62_USB"
        }
    },
    {
        name: "Modular MeshMess",
        category: "radio",
        icon: "M",
        status: "released",
        description: "Modular 1W node supporting various MCUs",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["1W", "Modular"],
        links: {
            repository: "https://github.com/NomDeTom/Modular_MeshMess",
            documentation: "https://github.com/NomDeTom/Modular_MeshMess",
            purchase: "https://github.com/NomDeTom/Modular_MeshMess"
        }
    },
    {
        name: "Ikoka Nano v3",
        category: "radio",
        icon: "I",
        status: "released",
        description: "Compact 1W nRF52840 Meshtastic node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "1W", "USB-C"],
        links: {
            repository: "https://github.com/ndoo/ikoka-nano-meshtastic-device",
            documentation: "https://github.com/ndoo/ikoka-nano-meshtastic-device",
            purchase: "https://github.com/ndoo/ikoka-nano-meshtastic-device"
        }
    },
    {
        name: "Ikoka Stick",
        category: "radio",
        icon: "I",
        status: "released",
        description: "USB stick form-factor 1W nRF52840 node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "1W", "USB-C"],
        links: {
            repository: "https://github.com/ndoo/ikoka-stick-meshtastic-device",
            documentation: "https://github.com/ndoo/ikoka-stick-meshtastic-device",
            purchase: "https://github.com/ndoo/ikoka-stick-meshtastic-device"
        }
    },
    {
        name: "Ikoka Handheld",
        category: "device",
        icon: "I",
        status: "released",
        description: "Handheld 1W nRF52840 Meshtastic device",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "1W", "Handheld"],
        links: {
            repository: "https://github.com/ndoo/ikoka-handheld-meshtastic-device",
            documentation: "https://github.com/ndoo/ikoka-handheld-meshtastic-device",
            purchase: "https://github.com/ndoo/ikoka-handheld-meshtastic-device"
        }
    },
    {
        name: "Ikoka Pro",
        category: "radio",
        icon: "I",
        status: "released",
        description: "Professional grade 1W nRF52840 node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "1W", "USB-C"],
        links: {
            repository: "https://github.com/ndoo/ikoka-pro-meshtastic-device",
            documentation: "https://github.com/ndoo/ikoka-pro-meshtastic-device",
            purchase: "https://github.com/ndoo/ikoka-pro-meshtastic-device"
        }
    },
    {
        name: "Meshstick",
        category: "radio",
        icon: "M",
        status: "released",
        description: "USB to SPI LoRa adapter",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["USB", "SPI", "SX1262"],
        links: {
            repository: "https://github.com/markbirss/MESHSTICK",
            documentation: "https://github.com/markbirss/MESHSTICK",
            purchase: "https://github.com/markbirss/MESHSTICK"
        }
    },
    {
        name: "LoRa Starter Edition Hat",
        category: "radio",
        icon: "L",
        status: "released",
        description: "SX1262 I2C LoRa HAT for Raspberry Pi",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "SX1262", "Raspberry Pi", "Hat", "I2C"],
        links: {
            repository: "https://github.com/markbirss/lora-starter-edition-sx1262-i2c",
            documentation: "https://github.com/markbirss/lora-starter-edition-sx1262-i2c",
            purchase: "https://github.com/markbirss/lora-starter-edition-sx1262-i2c"
        }
    },
    {
        name: "ct62 tiny",
        category: "radio",
        icon: "c",
        status: "released",
        description: "Tiny ESP32-C3 node using HT-CT62 module",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["ESP32-C3", "SX1262", "USB-C"],
        links: {
            repository: "https://github.com/mrekin/MeshtasticCustomBoards/tree/main/Gerbers/ct62_tiny",
            documentation: "https://github.com/mrekin/MeshtasticCustomBoards/tree/main/Gerbers/ct62_tiny",
            purchase: "https://github.com/mrekin/MeshtasticCustomBoards"
        }
    },
    {
        name: "e80 promicro v1.1",
        category: "radio",
        icon: "e",
        status: "released",
        description: "nRF52840 node with E80-900M2213S module",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "E80-900M2213S"],
        links: {
            repository: "https://github.com/mrekin/MeshtasticCustomBoards/tree/main/Gerbers/e80_promicro/v1.1",
            documentation: "https://github.com/mrekin/MeshtasticCustomBoards/tree/main/Gerbers/e80_promicro/v1.1",
            purchase: "https://github.com/mrekin/MeshtasticCustomBoards"
        }
    },
    {
        name: "e80 promicro v1.2",
        category: "radio",
        icon: "e",
        status: "released",
        description: "nRF52840 node with E80-900M2213S module v1.2",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "E80-900M2213S"],
        links: {
            repository: "https://github.com/mrekin/MeshtasticCustomBoards/tree/main/Gerbers/e80_promicro/v1.2",
            documentation: "https://github.com/mrekin/MeshtasticCustomBoards/tree/main/Gerbers/e80_promicro/v1.2",
            purchase: "https://github.com/mrekin/MeshtasticCustomBoards"
        }
    },
    {
        name: "fulltec v1",
        category: "radio",
        icon: "f",
        status: "released",
        description: "nRF52840 full-feature Meshtastic node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "USB-C"],
        links: {
            repository: "https://github.com/mrekin/MeshtasticCustomBoards/tree/main/Gerbers/fulltec/v1",
            documentation: "https://github.com/mrekin/MeshtasticCustomBoards/tree/main/Gerbers/fulltec/v1",
            purchase: "https://github.com/mrekin/MeshtasticCustomBoards"
        }
    },
    {
        name: "fulltec v2",
        category: "radio",
        icon: "f",
        status: "released",
        description: "nRF52840 full-feature Meshtastic node v2",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "USB-C"],
        links: {
            repository: "https://github.com/mrekin/MeshtasticCustomBoards/tree/main/Gerbers/fulltec/v2",
            documentation: "https://github.com/mrekin/MeshtasticCustomBoards/tree/main/Gerbers/fulltec/v2",
            purchase: "https://github.com/mrekin/MeshtasticCustomBoards"
        }
    },
    {
        name: "MeshAdv",
        category: "radio",
        icon: "🚙",
        status: "released",
        description: "1W Raspberry Pi HAT LoRa node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "SX1262", "1W", "Raspberry Pi", "Hat"],
        links: {
            repository: "https://github.com/chrismyers2000/MeshAdv-Pi-Hat",
            documentation: "https://github.com/chrismyers2000/MeshAdv-Pi-Hat",
            purchase: "https://github.com/chrismyers2000/MeshAdv-Pi-Hat"
        }
    },
    {
        name: "MeshAdv Mini",
        category: "radio",
        icon: "🚙",
        status: "released",
        description: "Compact Raspberry Pi HAT LoRa node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "SX1262", "Raspberry Pi", "Hat"],
        links: {
            repository: "https://github.com/chrismyers2000/MeshAdv-Mini",
            documentation: "https://github.com/chrismyers2000/MeshAdv-Mini",
            purchase: "https://github.com/chrismyers2000/MeshAdv-Mini"
        }
    },
    {
        name: "Mesh-Tab",
        category: "device",
        icon: "M",
        status: "released",
        description: "ESP32-S3 tablet-style Meshtastic device",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["ESP32-S3", "SX1262", "Display"],
        links: {
            repository: "https://github.com/valzzu/Mesh-Tab",
            documentation: "https://github.com/valzzu/Mesh-Tab",
            purchase: "https://github.com/valzzu/Mesh-Tab"
        }
    },
    {
        name: "Shadow Raven",
        category: "radio",
        icon: "S",
        status: "released",
        description: "nRF52840 node with nRFLR1110 and SKY65313-21 FEM",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "FEM", "LR1110"],
        links: {
            repository: "https://github.com/valzzu/meshtastic-pcbs/tree/main/Shadow%20Raven",
            documentation: "https://github.com/valzzu/meshtastic-pcbs/tree/main/Shadow%20Raven",
            purchase: "https://github.com/valzzu/meshtastic-pcbs/tree/main/Shadow%20Raven"
        }
    },
    {
        name: "Nexio",
        category: "radio",
        icon: "N",
        status: "released",
        description: "Luckfox Lyra based Linux LoRa node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "SX1262", "Luckfox Lyra"],
        links: {
            repository: "https://github.com/valzzu/meshtastic-pcbs/tree/main/Nexio",
            documentation: "https://github.com/valzzu/meshtastic-pcbs/tree/main/Nexio",
            purchase: "https://github.com/valzzu/meshtastic-pcbs/tree/main/Nexio"
        }
    },
    {
        name: "Spearmintastic",
        category: "radio",
        icon: "S",
        status: "released",
        description: "nRF52840 Meshtastic node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "USB-C"],
        links: {
            repository: "https://github.com/fire219/spearmintastic",
            documentation: "https://github.com/fire219/spearmintastic",
            purchase: "https://github.com/fire219/spearmintastic"
        }
    },
    {
        name: "BabelFox",
        category: "radio",
        icon: "B",
        status: "released",
        description: "1W Luckfox Lyra based Linux LoRa node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "SX1262", "1W", "Luckfox Lyra"],
        links: {
            repository: "https://github.com/fire219/babelfox",
            documentation: "https://github.com/fire219/babelfox",
            purchase: "https://github.com/fire219/babelfox"
        }
    },
    {
        name: "Luckfox Ultra Hat",
        category: "radio",
        icon: "L",
        status: "released",
        description: "1W HAT for Luckfox Lyra/Pico Ultra",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "SX1262", "1W", "Luckfox", "Hat"],
        links: {
            repository: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/Luckfox%20Ultra%20Hat",
            documentation: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/Luckfox%20Ultra%20Hat",
            purchase: "https://github.com/wehooper4/Meshtastic-Hardware"
        }
    },
    {
        name: "NebraHat",
        category: "radio",
        icon: "N",
        status: "released",
        description: "1W Raspberry Pi HAT LoRa node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "SX1262", "1W", "Raspberry Pi", "Hat"],
        links: {
            repository: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/NebraHat",
            documentation: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/NebraHat",
            purchase: "https://github.com/wehooper4/Meshtastic-Hardware"
        }
    },
    {
        name: "NebraHat Duo",
        category: "radio",
        icon: "N",
        status: "released",
        description: "Dual-radio 1W Raspberry Pi HAT with E80-900M2213S",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "SX1262", "1W", "Raspberry Pi", "Hat", "E80-900M2213S"],
        links: {
            repository: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/NebraHat/Duo",
            documentation: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/NebraHat/Duo",
            purchase: "https://github.com/wehooper4/Meshtastic-Hardware"
        }
    },
    {
        name: "NewtPi",
        category: "radio",
        icon: "N",
        status: "released",
        description: "1W Raspberry Pi HAT LoRa node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "SX1262", "1W", "Raspberry Pi", "Hat"],
        links: {
            repository: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/NewtPi",
            documentation: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/NewtPi",
            purchase: "https://github.com/wehooper4/Meshtastic-Hardware"
        }
    },
    {
        name: "PowerPi Mesh Hat",
        category: "radio",
        icon: "P",
        status: "released",
        description: "1W Raspberry Pi HAT with power management",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "SX1262", "1W", "Raspberry Pi", "Hat", "Power"],
        links: {
            repository: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/PowerPi%20Mesh%20Hat/V0.9",
            documentation: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/PowerPi%20Mesh%20Hat/V0.9",
            purchase: "https://github.com/wehooper4/Meshtastic-Hardware"
        }
    },
    {
        name: "SolarXiaoBLE v0.8",
        category: "radio",
        icon: "☀️",
        status: "released",
        description: "Solar powered nRF52840 BLE node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "1W", "Solar", "BLE"],
        links: {
            repository: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/XaioSeries/V0.8",
            documentation: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/XaioSeries/V0.8",
            purchase: "https://github.com/wehooper4/Meshtastic-Hardware"
        }
    },
    {
        name: "SolarXiao v0.9",
        category: "radio",
        icon: "☀️",
        status: "released",
        description: "Solar powered 1W nRF52840 node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "1W", "Solar"],
        links: {
            repository: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/XaioSeries/V0.9/SolarXaio",
            documentation: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/XaioSeries/V0.9/SolarXaio",
            purchase: "https://github.com/wehooper4/Meshtastic-Hardware"
        }
    },
    {
        name: "XaioGator v0.9",
        category: "radio",
        icon: "X",
        status: "released",
        description: "1W nRF52840 node with battery management",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "1W"],
        links: {
            repository: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/XaioSeries/V0.9/XaioGator",
            documentation: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/XaioSeries/V0.9/XaioGator",
            purchase: "https://github.com/wehooper4/Meshtastic-Hardware"
        }
    },
    {
        name: "XaioGator+ v1.0",
        category: "radio",
        icon: "X",
        status: "released",
        description: "Enhanced 1W nRF52840 node v1.0",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "1W"],
        links: {
            repository: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/XaioSeries/V1.0/XiaoGator%2B",
            documentation: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/XaioSeries/V1.0/XiaoGator%2B",
            purchase: "https://github.com/wehooper4/Meshtastic-Hardware"
        }
    },
    {
        name: "ZebraHAT",
        category: "radio",
        icon: "Z",
        status: "released",
        description: "1W Raspberry Pi HAT with E22P-900M30S",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "1W", "Raspberry Pi", "Hat", "E22P-900M30S"],
        links: {
            repository: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/ZebraHAT",
            documentation: "https://github.com/wehooper4/Meshtastic-Hardware/tree/main/ZebraHAT",
            purchase: "https://github.com/wehooper4/Meshtastic-Hardware"
        }
    },
    {
        name: "XiaoWOW",
        category: "radio",
        icon: "X",
        status: "released",
        description: "1W nRF52840 Xiao form-factor node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "1W", "Xiao"],
        links: {
            repository: "https://oshwlab.com/jljohnson87/xiaowow",
            documentation: "https://oshwlab.com/jljohnson87/xiaowow",
            purchase: "https://oshwlab.com/jljohnson87/xiaowow"
        }
    },
    {
        name: "LoRaPi M2213S",
        category: "radio",
        icon: "L",
        status: "released",
        description: "E80-900M2213S HAT for Raspberry Pi Zero",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "E80-900M2213S", "Raspberry Pi", "Hat"],
        links: {
            repository: "https://oshwlab.com/jljohnson87/lorapi-m2213s",
            documentation: "https://oshwlab.com/jljohnson87/lorapi-m2213s",
            purchase: "https://oshwlab.com/jljohnson87/lorapi-m2213s"
        }
    },
    {
        name: "LoRaPi M30S",
        category: "radio",
        icon: "L",
        status: "released",
        description: "1W Raspberry Pi HAT LoRa node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "SX1262", "1W", "Raspberry Pi", "Hat"],
        links: {
            repository: "https://oshwlab.com/jljohnson87/lorapi-m30s",
            documentation: "https://oshwlab.com/jljohnson87/lorapi-m30s",
            purchase: "https://oshwlab.com/jljohnson87/lorapi-m30s"
        }
    },
    {
        name: "stm32-v1",
        category: "radio",
        icon: "S",
        status: "released",
        description: "STM32 based Meshtastic node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["STM32", "SX1262"],
        links: {
            repository: "https://github.com/Stary2001/my-mesh-nodes/tree/main/hardware/stm32-v1",
            documentation: "https://github.com/Stary2001/my-mesh-nodes/tree/main/hardware/stm32-v1",
            purchase: "https://github.com/Stary2001/my-mesh-nodes"
        }
    },
    {
        name: "ebyte-e80-22-zero",
        category: "radio",
        icon: "E",
        status: "released",
        description: "E80-900M22S HAT for Raspberry Pi Zero",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "Raspberry Pi", "Hat"],
        links: {
            repository: "https://github.com/Stary2001/my-mesh-nodes/tree/main/hardware/ebyte-e80-22-zero",
            documentation: "https://github.com/Stary2001/my-mesh-nodes/tree/main/hardware/ebyte-e80-22-zero",
            purchase: "https://github.com/Stary2001/my-mesh-nodes"
        }
    },
    {
        name: "ebyte-e22p-30-zero",
        category: "radio",
        icon: "E",
        status: "released",
        description: "1W E22P-900M30S HAT for Raspberry Pi Zero",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["Linux", "1W", "Raspberry Pi", "Hat"],
        links: {
            repository: "https://github.com/Stary2001/my-mesh-nodes/tree/main/hardware/ebyte-e22p-30-zero",
            documentation: "https://github.com/Stary2001/my-mesh-nodes/tree/main/hardware/ebyte-e22p-30-zero",
            purchase: "https://github.com/Stary2001/my-mesh-nodes"
        }
    },
    {
        name: "pro-meowcro",
        category: "radio",
        icon: "p",
        status: "released",
        description: "Compact nRF52840 Meshtastic node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "USB-C"],
        links: {
            repository: "https://github.com/Stary2001/my-mesh-nodes/tree/main/hardware/pro-meowcro",
            documentation: "https://github.com/Stary2001/my-mesh-nodes/tree/main/hardware/pro-meowcro",
            purchase: "https://github.com/Stary2001/my-mesh-nodes"
        }
    },
    {
        name: "Albatastic PRO",
        category: "radio",
        icon: "A",
        status: "released",
        description: "1W nRF52840 premium Meshtastic node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "1W", "USB-C"],
        links: {
            repository: "https://github.com/EmilioAL-Git/PCB-Albatastic-PRO",
            documentation: "https://github.com/EmilioAL-Git/PCB-Albatastic-PRO",
            purchase: "https://github.com/EmilioAL-Git/PCB-Albatastic-PRO"
        }
    },
    {
        name: "Albatastic Node",
        category: "radio",
        icon: "A",
        status: "released",
        description: "1W nRF52840 Meshtastic node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "1W", "USB-C"],
        links: {
            repository: "https://github.com/sqtactical/Albatastic_Node",
            documentation: "https://github.com/sqtactical/Albatastic_Node",
            purchase: "https://github.com/sqtactical/Albatastic_Node"
        }
    },
    {
        name: "Albapipe Meshtastic Node",
        category: "radio",
        icon: "A",
        status: "released",
        description: "1W nRF52840 pipe-style Meshtastic node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "1W", "USB-C"],
        links: {
            repository: "https://github.com/miguelleonmanzano/Albapipe-Meshtastic-Node",
            documentation: "https://github.com/miguelleonmanzano/Albapipe-Meshtastic-Node",
            purchase: "https://github.com/miguelleonmanzano/Albapipe-Meshtastic-Node"
        }
    },
    {
        name: "18650 Hat Node",
        category: "radio",
        icon: "🔋",
        status: "released",
        description: "nRF52840 node with 18650 battery holder",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "18650", "Battery"],
        links: {
            repository: "https://github.com/canadamadman/18650_Hat_Node",
            documentation: "https://github.com/canadamadman/18650_Hat_Node",
            purchase: "https://github.com/canadamadman/18650_Hat_Node"
        }
    },
    {
        name: "Outdoor Node",
        category: "device",
        icon: "🌲",
        status: "released",
        description: "Weatherproof nRF52840 outdoor Meshtastic node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "Outdoor", "Weatherproof"],
        links: {
            repository: "https://github.com/canadamadman/Outdoor_Node",
            documentation: "https://github.com/canadamadman/Outdoor_Node",
            purchase: "https://github.com/canadamadman/Outdoor_Node"
        }
    },
    {
        name: "Box Node",
        category: "device",
        icon: "📦",
        status: "released",
        description: "Enclosed nRF52840 Meshtastic node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "Enclosure"],
        links: {
            repository: "https://github.com/canadamadman/Box_Node",
            documentation: "https://github.com/canadamadman/Box_Node",
            purchase: "https://github.com/canadamadman/Box_Node"
        }
    },
    {
        name: "Entendo Node Boy",
        category: "device",
        icon: "🎮",
        status: "released",
        description: "Game Boy style nRF52840 Meshtastic handheld",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "Handheld", "Retro"],
        links: {
            repository: "https://github.com/canadamadman/Entendnode_Node_Boy",
            documentation: "https://github.com/canadamadman/Entendnode_Node_Boy",
            purchase: "https://github.com/canadamadman/Entendnode_Node_Boy"
        }
    },
    {
        name: "xiao-ble",
        category: "radio",
        icon: "X",
        status: "released",
        description: "1W nRF52840 Xiao BLE form-factor node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "1W", "Xiao", "BLE"],
        links: {
            repository: "https://github.com/andrew-moroz/xiao-ble-pcb",
            documentation: "https://github.com/andrew-moroz/xiao-ble-pcb",
            purchase: "https://github.com/andrew-moroz/xiao-ble-pcb"
        }
    },
    {
        name: "DonkTastic",
        category: "radio",
        icon: "D",
        status: "released",
        description: "1W nRF52840 USB dongle-style node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "1W", "USB"],
        links: {
            repository: "https://github.com/jycannel/DonkTastic_pcb",
            documentation: "https://github.com/jycannel/DonkTastic_pcb",
            purchase: "https://github.com/jycannel/DonkTastic_pcb"
        }
    },
    {
        name: "CheapMesh",
        category: "radio",
        icon: "C",
        status: "released",
        description: "Low-cost ESP32-C3 node using HT-CT62 module",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["ESP32-C3", "SX1262", "USB-C", "Low-cost"],
        links: {
            repository: "https://github.com/joyel24/CheapMesh",
            documentation: "https://github.com/joyel24/CheapMesh",
            purchase: "https://github.com/joyel24/CheapMesh"
        }
    },
    {
        name: "RAK killer v2",
        category: "radio",
        icon: "R",
        status: "released",
        description: "nRF52840 RAK form-factor alternative",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "USB-C"],
        links: {
            repository: "https://github.com/Uroboros67/rak_killer",
            documentation: "https://github.com/Uroboros67/rak_killer",
            purchase: "https://github.com/Uroboros67/rak_killer"
        }
    },
    {
        name: "MeshWalkie",
        category: "device",
        icon: "📞",
        status: "prototype",
        description: "ESP32-S3 walkie-talkie style Meshtastic device",
        compatibility: ["Meshtastic"],
        tags: ["ESP32-S3", "SX1262", "Handheld", "Audio"],
        links: {
            repository: "https://hackaday.io/project/202551-meshwalkie",
            documentation: "https://hackaday.io/project/202551-meshwalkie",
            purchase: "https://hackaday.io/project/202551-meshwalkie"
        }
    },
    {
        name: "MiranNode V1",
        category: "radio",
        icon: "M",
        status: "released",
        description: "nRF52840 Meshtastic compatible node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262"],
        links: {
            repository: "https://www.pcbway.com/project/shareproject/Meshtastic_Compatible_Node_433afb1c.html",
            documentation: "https://www.pcbway.com/project/shareproject/Meshtastic_Compatible_Node_433afb1c.html",
            purchase: "https://www.pcbway.com/project/shareproject/Meshtastic_Compatible_Node_433afb1c.html"
        }
    },
    {
        name: "Econotastic",
        category: "radio",
        icon: "E",
        status: "released",
        description: "Low-cost RP2040 based Meshtastic node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["RP2040", "SX1262", "Low-cost"],
        links: {
            repository: "https://sites.google.com/view/econotastic/home",
            documentation: "https://sites.google.com/view/econotastic/home",
            purchase: "https://sites.google.com/view/econotastic/home"
        }
    },
    {
        name: "MichTastic Node",
        category: "radio",
        icon: "M",
        status: "released",
        description: "1W nRF52840 Meshtastic node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "1W"],
        links: {
            repository: "https://github.com/Hamspiced/MichTastic_Node",
            documentation: "https://github.com/Hamspiced/MichTastic_Node",
            purchase: "https://github.com/Hamspiced/MichTastic_Node"
        }
    },
    {
        name: "Hammer 1W LoRa Board",
        category: "radio",
        icon: "🔨",
        status: "released",
        description: "1W ESP32-WROOM-32 LoRa board",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["ESP32", "SX1262", "1W"],
        links: {
            repository: "https://github.com/BrokenCircuitRanch/Hammer-1W_LORA-board",
            documentation: "https://github.com/BrokenCircuitRanch/Hammer-1W_LORA-board",
            purchase: "https://github.com/BrokenCircuitRanch/Hammer-1W_LORA-board"
        }
    },
    {
        name: "meshtastic-mini",
        category: "radio",
        icon: "m",
        status: "released",
        description: "Compact nRF52840 Meshtastic node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262"],
        links: {
            repository: "https://oshwhub.com/shenye894/meshtastic-mini",
            documentation: "https://oshwhub.com/shenye894/meshtastic-mini",
            purchase: "https://oshwhub.com/shenye894/meshtastic-mini"
        }
    },
    {
        name: "GAT562 Mesh Trial Tracker",
        category: "radio",
        icon: "G",
        status: "released",
        description: "nRF52840 Meshtastic tracker node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "Tracker", "GPS"],
        links: {
            repository: "https://github.com/quhyhao/GAT562",
            documentation: "https://github.com/quhyhao/GAT562",
            purchase: "https://github.com/quhyhao/GAT562"
        }
    },
    {
        name: "easy E22",
        category: "radio",
        icon: "e",
        status: "released",
        description: "1W nRF52840 node for E22 modules",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "1W"],
        links: {
            repository: "https://github.com/brad112358/easy_E22",
            documentation: "https://github.com/brad112358/easy_E22",
            purchase: "https://github.com/brad112358/easy_E22"
        }
    },
    {
        name: "LR2021 Explorer",
        category: "radio",
        icon: "L",
        status: "released",
        description: "LR2021 based long range radio explorer",
        compatibility: ["Meshtastic"],
        tags: ["LR2021"],
        links: {
            repository: "https://github.com/GeneralSyb/LR2021-Explorer",
            documentation: "https://github.com/GeneralSyb/LR2021-Explorer",
            purchase: "https://github.com/GeneralSyb/LR2021-Explorer"
        }
    },
    {
        name: "Meshlet",
        category: "radio",
        icon: "M",
        status: "released",
        description: "RP2040 based Meshtastic node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["RP2040", "SX1262", "USB-C"],
        links: {
            repository: "https://www.5panel.dance/Meshlet/",
            documentation: "https://www.5panel.dance/Meshlet/",
            purchase: "https://www.5panel.dance/Meshlet/"
        }
    },
    {
        name: "ra62 c3 smini",
        category: "radio",
        icon: "r",
        status: "released",
        description: "ESP32-C3 node with RA62 module",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["ESP32-C3", "SX1262"],
        links: {
            repository: "https://github.com/mrekin/MeshtasticCustomBoards/tree/main/Gerbers/ra62_c3_smini",
            documentation: "https://github.com/mrekin/MeshtasticCustomBoards/tree/main/Gerbers/ra62_c3_smini",
            purchase: "https://github.com/mrekin/MeshtasticCustomBoards"
        }
    }
];
