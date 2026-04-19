function hoursAgo(h: number): Date {
  const d = new Date();
  d.setHours(d.getHours() - h);
  return d;
}

function minutesAgo(m: number): Date {
  const d = new Date();
  d.setMinutes(d.getMinutes() - m);
  return d;
}

export const demoStore = {
  threats: [
    {
      id: "threat_1",
      ipAddress: "185.220.101.47",
      score: 87,
      riskLevel: "critical",
      status: "honeypotted",
      userAgent: "python-requests/2.28.0",
      technique: "SQL Injection via REST",
      requestCount: 342,
      attributionConfidence: 0.91,
      geoLocation: "Chisinau, Moldova",
      asn: "AS60068 (Datacamp Ltd)",
      isTor: false,
      isVpn: true,
      firstSeen: hoursAgo(48).toISOString(),
      lastSeen: minutesAgo(12).toISOString(),
    },
    {
      id: "threat_2",
      ipAddress: "45.142.212.100",
      score: 72,
      riskLevel: "high",
      status: "honeypotted",
      userAgent: "curl/7.68.0",
      technique: "Credential Stuffing",
      requestCount: 1847,
      attributionConfidence: 0.78,
      geoLocation: "Amsterdam, Netherlands",
      asn: "AS202425 (IP Volume Inc)",
      isTor: false,
      isVpn: true,
      firstSeen: hoursAgo(6).toISOString(),
      lastSeen: minutesAgo(3).toISOString(),
    },
    {
      id: "threat_3",
      ipAddress: "104.21.67.89",
      score: 61,
      riskLevel: "high",
      status: "active",
      userAgent: "axios/1.4.0",
      technique: "API Scraping",
      requestCount: 523,
      attributionConfidence: 0.62,
      geoLocation: "San Jose, USA",
      asn: "AS13335 (Cloudflare Inc)",
      isTor: false,
      isVpn: false,
      firstSeen: hoursAgo(2).toISOString(),
      lastSeen: minutesAgo(1).toISOString(),
    },
    {
      id: "threat_4",
      ipAddress: "77.88.55.80",
      score: 45,
      riskLevel: "medium",
      status: "monitoring",
      userAgent: "Mozilla/5.0",
      technique: "Reconnaissance",
      requestCount: 89,
      attributionConfidence: 0.55,
      geoLocation: "Moscow, Russia",
      asn: "AS13238 (Yandex LLC)",
      isTor: false,
      isVpn: false,
      firstSeen: hoursAgo(1).toISOString(),
      lastSeen: minutesAgo(20).toISOString(),
    },
  ],
  sessions: [
    {
      id: "sess_1",
      type: "honeypot",
      ipAddress: "185.220.101.47",
      requestCount: 342,
      currentScore: 87,
      clonedToHoneypotAt: hoursAgo(47).toISOString(),
      cloneLatencyMs: 74,
      startedAt: hoursAgo(48).toISOString(),
      lastActivity: minutesAgo(1).toISOString(),
    },
    {
      id: "sess_2",
      type: "honeypot",
      ipAddress: "45.142.212.100",
      requestCount: 1847,
      currentScore: 72,
      clonedToHoneypotAt: hoursAgo(5).toISOString(),
      cloneLatencyMs: 88,
      startedAt: hoursAgo(6).toISOString(),
      lastActivity: minutesAgo(3).toISOString(),
    },
    {
      id: "sess_3",
      type: "real",
      ipAddress: "192.168.1.50",
      requestCount: 12,
      currentScore: 8,
      clonedToHoneypotAt: null,
      cloneLatencyMs: null,
      startedAt: hoursAgo(1).toISOString(),
      lastActivity: minutesAgo(20).toISOString(),
    },
    {
      id: "sess_4",
      type: "real",
      ipAddress: "10.0.0.42",
      requestCount: 5,
      currentScore: 3,
      clonedToHoneypotAt: null,
      cloneLatencyMs: null,
      startedAt: minutesAgo(30).toISOString(),
      lastActivity: minutesAgo(5).toISOString(),
    },
  ],
  attacks: [
    {
      id: "attack_1",
      fingerprint: "fp_a7c3d9e2b1f845",
      ipAddresses: ["185.220.101.47", "185.220.101.52", "185.220.101.61"],
      technique: "SQL Injection via REST",
      intent: "data_exfiltration",
      attributionConfidence: 0.91,
      totalRequests: 342,
      apiKeyRotations: 3,
      honeypotTimeMinutes: 2847,
      estimatedActorType: "organized_group",
      mitreTechniques: ["T1190", "T1078", "T1560", "T1041"],
      firstSeen: hoursAgo(48).toISOString(),
      lastSeen: minutesAgo(12).toISOString(),
    },
    {
      id: "attack_2",
      fingerprint: "fp_b2e8f1a4c79d36",
      ipAddresses: ["45.142.212.100", "45.142.212.105"],
      technique: "Credential Stuffing",
      intent: "credential_stuffing",
      attributionConfidence: 0.78,
      totalRequests: 1847,
      apiKeyRotations: 7,
      honeypotTimeMinutes: 302,
      estimatedActorType: "script_kiddie",
      mitreTechniques: ["T1110.004", "T1078.004", "T1557"],
      firstSeen: hoursAgo(6).toISOString(),
      lastSeen: minutesAgo(3).toISOString(),
    },
  ],
  canaryTokens: [
    {
      id: "cny_1",
      name: "Admin API Key Canary",
      type: "api_key",
      location: "/api/admin responses",
      tripCount: 2,
      lastTripped: hoursAgo(47).toISOString(),
      status: "tripped",
      createdAt: hoursAgo(72).toISOString(),
    },
    {
      id: "cny_2",
      name: "Customer Data URL Canary",
      type: "url",
      location: "/api/customers/export",
      tripCount: 0,
      lastTripped: null,
      status: "active",
      createdAt: hoursAgo(24).toISOString(),
    },
    {
      id: "cny_3",
      name: "Database Credentials Canary",
      type: "credential",
      location: "/api/config endpoint",
      tripCount: 1,
      lastTripped: hoursAgo(12).toISOString(),
      status: "tripped",
      createdAt: hoursAgo(48).toISOString(),
    },
  ],
  pricing: [
    {
      id: "starter",
      name: "Starter",
      monthlyPrice: 49,
      annualPrice: 470,
      description: "Perfect for small businesses getting started with API security.",
      features: ["Up to 100K API requests/month", "AI threat scoring", "Honeypot redirection", "3 canary tokens", "Community support"],
      recommended: false,
    },
    {
      id: "professional",
      name: "Professional",
      monthlyPrice: 149,
      annualPrice: 1430,
      description: "For growing businesses that need advanced protection.",
      features: ["Up to 1M API requests/month", "AI threat scoring", "Honeypot redirection", "Unlimited canary tokens", "Attack profile forensics", "Email support"],
      recommended: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      monthlyPrice: 499,
      annualPrice: 4790,
      description: "Full-scale protection for large organizations.",
      features: ["Unlimited API requests", "AI threat scoring", "Honeypot redirection", "Unlimited canary tokens", "Attack profile forensics", "Custom integrations", "Dedicated support", "SLA guarantee"],
      recommended: false,
    },
  ],
};

export function getDashboardSummary() {
  const oneDayAgo = new Date(Date.now() - 86400000);
  const threatsToday = demoStore.threats.filter(
    (t) => new Date(t.firstSeen) >= oneDayAgo
  ).length;
  const honeypottedSessions = demoStore.sessions.filter(
    (s) => s.type === "honeypot"
  ).length;
  const activeAttackers = demoStore.threats.filter(
    (t) => t.status === "active" || t.status === "honeypotted"
  ).length;
  const avgScore = Math.round(
    demoStore.threats.reduce((a, b) => a + b.score, 0) / demoStore.threats.length
  );
  const blockedRequests = demoStore.threats
    .filter((t) => t.status === "honeypotted")
    .reduce((a, b) => a + b.requestCount, 0);

  return {
    totalThreatsToday: threatsToday,
    honeypottedSessions,
    canaryTrips: 2,
    activeAttackers,
    avgThreatScore: avgScore,
    blockedRequests,
    aiAccuracyRate: 0.968,
    learningEvents: 3,
    protectedBusinesses: 147,
    uptimeDays: 312,
    demoMode: true,
  };
}
