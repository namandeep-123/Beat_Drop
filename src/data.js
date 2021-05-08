import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "By Chance",
      artist: "SwuM",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15223",
      color: ["#CDA87E", "#7A4129"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Skates",
      artist: "SwuM",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
      color: ["#CDA87E", "#7A4129"],
      active: false,
      id: uuidv4(),
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15225",
    },
    {
      name: "Wish",
      artist: "SwuM",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15229",
      color: ["#CDA87E", "#7A4129"],
      active: false,
      id: uuidv4(),
    },
    {
      name: "Golden",
      artist: "Aarigod",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13004",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      active: false,
      id: uuidv4(),
      color: ["#62472D", "#ADC86E"],
    },
    {
      name: "Flashback",
      artist: "Blue Wednesday, Shopan",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11224",
      active: false,
      id: uuidv4(),
      color: ["#9F699B", "#BAA8DA"],
    },
    {
      name: "Flashes of Calm",
      artist: "mommy, Delayde",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/04/6acdccd13d84220cc009a3f5073a1a41550c17cb-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=350",
      active: false,
      id: uuidv4(),
      color: ["#3778D6", "#112970"],
    },
    {
      name: "Ever Forward",
      artist: "dryhope",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/04/6acdccd13d84220cc009a3f5073a1a41550c17cb-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=4786",
      active: false,
      id: uuidv4(),
      color: ["#3778D6", "#112970"],
    },
  ];
}

export default chillHop;
