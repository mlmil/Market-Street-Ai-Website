export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const email = req.body?.email;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Valid email address required" });
  }

  const bdHeaders = {
    Authorization: *** ${process.env.BUTTONDOWN_API_TOKEN}`,
    "Content-Type": "application/json",
  };

  try {
    // Create subscriber as unactivated — they'll get a confirmation email
    const response = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: bdHeaders,
      body: JSON.stringify({
        email_address: email,
        metadata: { source: "website" },
        tags: ["website-signup"],
      }),
    });

    const data = await response.json();

    if (response.status === 201) {
      // Send the confirmation email (triggers the double-opt-in flow)
      const subId = data.id;
      await fetch(`https://api.buttondown.email/v1/subscribers/${subId}/send-reminder`, {
        method: "POST",
        headers: bdHeaders,
      });
      return res.status(200).json({ success: true });
    }

    // Already subscribed
    if (response.status === 400 && data.code === "subscriber_blocked") {
      return res.status(400).json({ error: "This email couldn't be subscribed. Please try a different email." });
    }

    if (response.status === 400) {
      if (typeof data.detail === "string" && data.detail.includes("already subscribed")) {
        return res.status(200).json({ success: true, already_subscribed: true });
      }
      return res.status(400).json({ error: data.detail || "Subscription failed" });
    }

    return res.status(response.status).json({ error: data.detail || "Subscription failed" });
  } catch (err) {
    return res.status(500).json({ error: "Server error. Please try again later." });
  }
}