const projects = [
    {
        name: "Faketec",
        category: "board",
        icon: "F",
        status: "production",
        description: "A low-cost nRF52 device with Heltec form-factor",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "USB-C"],
        links: {
            repository: "https://github.com/gargomoma/fakeTec_pcb",
            documentation: "https://github.com/gargomoma/fakeTec_pcb",
            purchase: ""
        }
    },{
        name: "xiaoWa",
        category: "board",
        icon: "小瓦",
        status: "production",
        description: "A small 1W node pcb compatible with E22, E22P and E80 ",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["nRF52", "SX1262", "USB-C", "1W"],
        links: {
            repository: "https://github.com/gargomoma/xiaoWa_pcb",
            documentation: "https://github.com/gargomoma/xiaoWa_pcb",
            purchase: ""
        }
    },
    {
        name: "MeshTadpole",
        category: "board",
        icon: "🐸",
        status: "production",
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
        category: "board",
        icon: "🐸",
        status: "production",
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
        status: "production",
        description: "Standalone Meshtastic communicator (Heltec T114 V2)",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["NRF52", "SX1262","Keyboard",],
        links: {
            repository: "https://www.printables.com/model/1083609-nrf-txt-standalone-meshtastic-communicator-heltec",
            documentation: "https://www.printables.com/model/1083609-nrf-txt-standalone-meshtastic-communicator-heltec",
            purchase: "https://www.etsy.com/listing/1873027341/nrf-txt-most-advanced-stand-alone"
        }
    },
    {
        name: "BirbMesh-One",
        category: "device",
        icon: "🐦",
        status: "production",
        description: "Compact 1W low power Node",
        compatibility: ["Meshtastic", "MeshCore"],
        tags: ["NRF52", "SX1262"],
        links: {
            repository: "https://github.com/KokoSoft/BirbMesh-One",
            documentation: "https://github.com/KokoSoft/BirbMesh-One",
            purchase: "https://www.etsy.com/listing/1873027341/nrf-txt-most-advanced-stand-alone"
        }
    }
];
