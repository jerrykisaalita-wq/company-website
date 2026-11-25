import React, { useState } from "react";
import { motion } from "framer-motion";
import { contactData } from "../data/contactData";
import { homeData } from "../data/homeData";
import { SubpageHero } from "../components/ui/SubpageHero";
import { SectionHeader } from "../components/ui/SectionHeader";
import { GlowButton } from "../components/ui/GlowButton";
import { FaqAccordion } from "../components/ui/FaqAccordion";

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    query: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SubpageHero
        tag={contactData.tag}
        tagIcon={contactData.tagIcon}
        title={contactData.title}
        subtitle={contactData.subtitle}
      />

      {/* Top 3 Contact Option Cards */}
      <section style={{ padding: "10px 0 80px", backgroundColor: "#000000" }}>
        <div
          className="cosmoq-container contact-hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
            gap: "24px",
          }}
        >
          {/* Left Expert Card */}
          <div
            className="cosmoq-card"
            style={{
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                height: "240px",
              }}
            >
              <img
                src={contactData.heroCards.expert.visual}
                alt="Hello"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <h3 className="typo-h4" style={{ marginBottom: "10px" }}>
                {contactData.heroCards.expert.title}
              </h3>
              <p
                className="typo-body-sm"
                style={{ margin: "0 0 22px", color: "#9ba9c4" }}
              >
                {contactData.heroCards.expert.description}
              </p>
              <GlowButton
                label={contactData.heroCards.expert.ctaLabel}
                onClick={() =>
                  document
                    .getElementById("support-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                size="sm"
              />
            </div>
          </div>

          {/* Right Stacked Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[contactData.heroCards.press, contactData.heroCards.partner].map(
              (c) => (
                <div
                  key={c.title}
                  className="cosmoq-card"
                  style={{
                    padding: "28px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "18px",
                  }}
                >
                  <div>
                    <img
                      src={c.icon}
                      alt=""
                      style={{
                        width: "52px",
                        height: "52px",
                        marginBottom: "18px",
                      }}
                    />
                    <h3 className="typo-h4" style={{ marginBottom: "8px" }}>
                      {c.title}
                    </h3>
                    <p
                      className="typo-body-sm"
                      style={{ margin: 0, color: "#9ba9c4" }}
                    >
                      {c.description}
                    </p>
                  </div>
                  <div>
                    <GlowButton
                      label={c.ctaLabel}
                      onClick={() =>
                        document
                          .getElementById("support-form")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      size="sm"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Support Form Section */}
      <section
        id="support-form"
        style={{ padding: "60px 0 80px", backgroundColor: "#000000" }}
      >
        <div className="cosmoq-container">
          <SectionHeader
            tag={contactData.support.tag}
            tagIcon={contactData.support.tagIcon}
            title={contactData.support.title}
            subtitle={contactData.support.subtitle}
          />

          <div
            className="cosmoq-card contact-support-grid"
            style={{
              padding: "36px",
              display: "grid",
              gridTemplateColumns: "minmax(240px, 0.85fr) minmax(0, 1.15fr)",
              gap: "36px",
            }}
          >
            {/* Left Direct Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  color: "#9ba9c4",
                }}
              >
                GET SUPPORT
              </div>
              <div
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <img
                  src={contactData.support.phoneIcon}
                  alt=""
                  style={{ width: "26px", height: "26px" }}
                />
                <span style={{ fontSize: "15px", color: "#ffffff" }}>
                  {contactData.support.phone}
                </span>
              </div>
              <div
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <img
                  src={contactData.support.emailIcon}
                  alt=""
                  style={{ width: "26px", height: "26px" }}
                />
                <span style={{ fontSize: "15px", color: "#ffffff" }}>
                  {contactData.support.email}
                </span>
              </div>
            </div>

            {/* Right Interactive Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: "36px",
                  borderRadius: "16px",
                  backgroundColor: "rgba(1, 117, 255, 0.08)",
                  border: "1px solid rgba(1, 117, 255, 0.35)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "12px",
                }}
              >
                <h3 className="typo-h4">Message received!</h3>
                <p className="typo-body-sm" style={{ margin: 0, color: "#d1d4e3" }}>
                  Thank you, {formState.firstName || "there"}. Our team will get
                  back to you at {formState.email || "your email"} shortly.
                </p>
                <div style={{ marginTop: "8px" }}>
                  <GlowButton
                    label="Send Another Message"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        query: "",
                      });
                    }}
                    size="sm"
                  />
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <div
                  className="contact-form-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  <input
                    required
                    type="text"
                    placeholder="First Name"
                    value={formState.firstName}
                    onChange={(e) =>
                      setFormState({ ...formState, firstName: e.target.value })
                    }
                    style={inputStyle}
                  />
                  <input
                    required
                    type="text"
                    placeholder="Last Name"
                    value={formState.lastName}
                    onChange={(e) =>
                      setFormState({ ...formState, lastName: e.target.value })
                    }
                    style={inputStyle}
                  />
                </div>
                <div
                  className="contact-form-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    style={inputStyle}
                  />
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    style={inputStyle}
                  />
                </div>
                <textarea
                  required
                  rows={4}
                  placeholder="Query"
                  value={formState.query}
                  onChange={(e) =>
                    setFormState({ ...formState, query: e.target.value })
                  }
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <div>
                  <GlowButton type="submit" label="Submit" />
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section style={{ padding: "60px 0 80px", backgroundColor: "#000000" }}>
        <div className="cosmoq-container">
          <SectionHeader
            tag={contactData.offices.tag}
            tagIcon={contactData.offices.tagIcon}
            title={contactData.offices.title}
            subtitle={contactData.offices.subtitle}
          />

          <div
            className="contact-offices-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "24px",
            }}
          >
            {contactData.offices.locations.map((loc, idx) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.12, 0.23, 0.5, 1],
                }}
                className="cosmoq-card"
                style={{ padding: "16px" }}
              >
                <div
                  style={{
                    height: "220px",
                    borderRadius: "14px",
                    overflow: "hidden",
                    marginBottom: "16px",
                  }}
                >
                  <img
                    src={loc.image}
                    alt={`${loc.city}, ${loc.country}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ fontSize: "18px", fontWeight: 500, color: "#fff" }}>
                  {loc.city}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#ffac0a",
                    marginTop: "2px",
                  }}
                >
                  {loc.country}
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#9ba9c4",
                    margin: "8px 0 0",
                    lineHeight: 1.55,
                  }}
                >
                  {loc.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "60px 0 80px", backgroundColor: "#000000" }}>
        <div className="cosmoq-container">
          <SectionHeader
            tag={homeData.faq.tag}
            tagIcon={homeData.faq.tagIcon}
            title={homeData.faq.title}
            subtitle={homeData.faq.subtitle}
          />
          <FaqAccordion items={homeData.faq.items} />
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-hero-grid,
          .contact-support-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 820px) {
          .contact-offices-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .contact-support-grid {
            padding: 22px !important;
          }
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  backgroundColor: "rgba(255, 255, 255, 0.04)",
  border: "1px solid rgba(255, 255, 255, 0.14)",
  color: "#ffffff",
  fontSize: "16px",
  outline: "none",
};
