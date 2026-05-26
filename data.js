const projects = [
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
    }
];
