import { useEffect } from "react";

const SEOHead = () => {
  useEffect(() => {
    document.title = "Muhammad Usman Khan | Senior Full Stack Developer & Odoo Expert";
    
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Muhammad Usman Khan - Elite Full Stack Developer with 5.5+ years experience. Senior Odoo Expert, AI/Blockchain Developer. 175+ projects delivered. Founder of CODCrafters.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "Muhammad Usman Khan - Elite Full Stack Developer with 5.5+ years experience. Senior Odoo Expert, AI/Blockchain Developer. 175+ projects delivered. Founder of CODCrafters.";
      document.head.appendChild(newMeta);
    }
  }, []);

  return null;
};

export default SEOHead;
