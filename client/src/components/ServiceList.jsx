// ServicesList.jsx
import ServiceCard from "./ServiceCard";
import chipimg from "../assets/chip repair.jpg";
import circuitimg from "../assets/circuit repair.jpg";
import keyboardissue from "../assets/keyboard issue.webp";
import filecorrupt from "../assets/filecorrupt.png";
import hardwareissue from "../assets/haedware failoure.png";
import shutdown from "../assets/shutdown.png";
import software from "../assets/software installation.webp";
import battery from "../assets/battery draining.jpg";
import brokeglass from "../assets/brokeglass.jpg";
import slowperform from "../assets/slowperformance.jpg";
import overheat from "../assets/overheating.jpg";
import wifi from "../assets/wificonnection.png";
import motherboard from "../assets/motherboard.jpeg";
import fan from "../assets/laptop fan.jpeg";
import touchpad from "../assets/laptop touchpad.webp";
import speaker from "../assets/speaker problem.jpg";
import datarecovery from "../assets/data recovery.jpg";

const services = [
  {
    image: slowperform,
    title: "Slow Performance",
    description:
      "The computer or laptop runs slowly, with long boot times and delayed response times when opening applications.",
    whatsappMessage: "slow%20performance%20issue",
  },
  {
    image: keyboardissue,
    title: "Keyboard or Trackpad Not Working",
    description:
      "A non-functional keyboard or trackpad can significantly impact usability, often due to software glitches or hardware malfunctions.",
    whatsappMessage: "keyboard%20or%20trackpad%20issue",
  },
  {
    image: software,
    title: "Software Crashes and Installation",
    description:
      "Software crashes may result from compatibility conflicts or corrupted files, requiring proper installation and updates.",
    whatsappMessage: "software%20crashes%20or%20freezes",
  },
  {
    image: filecorrupt,
    title: "File Corruption Issue",
    description:
      "File corruption occurs when data becomes damaged, making files unreadable or unusable.",
    whatsappMessage: "file%20corruption%20issues",
  },
  {
    image: hardwareissue,
    title: "Hard Drive Failure",
    description:
      "The system cannot recognize the hard drive, causing data loss or file inaccessibility.",
    whatsappMessage: "hard%20drive%20failure",
  },
  {
    image: shutdown,
    title: "Random Shutdowns or Restarts",
    description:
      "Unexpected shutdowns or restarts may result from overheating or power issues.",
    whatsappMessage: "random%20shutdown%20restart%20issue",
  },
  {
    image: battery,
    title: "Battery Issues (Laptops)",
    description:
      "We replace batteries to resolve slow charging, overheating, or battery drain issues.",
    whatsappMessage: "battery%20issues",
  },
  {
    image: chipimg,
    title: "Chip Replacement or Repair",
    description:
      "Chip replacement can resolve issues like overheating or physical damage to internal components.",
    whatsappMessage: "chip%20replacement%20issues",
  },
  {
    image: circuitimg,
    title: "Circuit Replacement or Repair",
    description:
      "We repair or replace damaged circuits caused by power surges or overheating.",
    whatsappMessage: "circuit%20repair%20issues",
  },
  {
    image: brokeglass,
    title: "Display or Glass Replacement",
    description:
      "Replacing damaged screens restores proper display functionality.",
    whatsappMessage: "display%20screen%20replacement",
  },
  {
    image: wifi,
    title: "Wi-Fi Connection Issues",
    description:
      "We troubleshoot and fix Wi-Fi connectivity issues for smooth internet access.",
    whatsappMessage: "wifi%20issues",
  },
  {
    image: overheat,
    title: "Overheating Problems",
    description:
      "We diagnose and resolve overheating issues to prevent hardware damage.",
    whatsappMessage: "overheating%20issues",
  },
  {
    image: motherboard,
    title: "Motherboard Repair or Replacement",
    description:
      "We fix or replace faulty motherboards to restore system stability.",
    whatsappMessage: "motherboard%20repair",
  },
  {
    image: fan,
    title: "Fan Replacement or Repair",
    description:
      "We fix or replace cooling fans to ensure proper airflow and prevent overheating.",
    whatsappMessage: "fan%20issues",
  },
  {
    image: touchpad,
    title: "Touchpad Repair",
    description:
      "We resolve touchpad issues to ensure smooth navigation and functionality.",
    whatsappMessage: "touchpad%20issues",
  },
  {
    image: speaker,
    title: "Speaker Repair or Replacement",
    description:
      "We replace or repair faulty speakers to restore sound quality.",
    whatsappMessage: "speaker%20issues",
  },
  {
    image: datarecovery,
    title: "Data Recovery",
    description:
      "We recover lost or corrupted data from damaged or failing drives.",
    whatsappMessage: "data%20recovery%20issues",
  },
];

const ServicesList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          image={service.image}
          title={service.title}
          description={service.description}
          whatsappMessage={service.whatsappMessage}
        />
      ))}
    </div>
  );
};

export default ServicesList;
