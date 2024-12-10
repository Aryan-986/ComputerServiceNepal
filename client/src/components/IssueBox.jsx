import { useState } from "react";

const WhatsAppIssueBox = () => {
    const [issue, setIssue] = useState("");
    const handleSendToWhatsApp = () => {
        const message = encodeURIComponent(`Hello, I have an Issue:${issue}`);
        const whatsappURL = `https://wa.me/9779851095326?text=${message}`

        //open Whatsapp URL
        window.open(whatsappURL, "_blank");
    }
    return(
        <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto"}}>
            <h2> Report your Issue </h2>
            <textarea
            rows="5"
            placeholder="Describe ypur laptop or computer issue here..."
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            style={{
                width: "100%",
                padding: "10px",
                marginBottom:"10px",
                border:"1px solid #ccc",
                borderRadius: "5px",
            }}
            ></textarea>
            <button
            onClick={handleSendToWhatsApp}
            disabled={!issue.trim()}
            style={{
                padding: "10px 20px",
                backgroundColor: "#25D366",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
            >
                Send to WhatsApp
            </button>
        </div>
    )
};

export default WhatsAppIssueBox