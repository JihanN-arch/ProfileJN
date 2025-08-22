import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function TestIcon() {
  return (
    <div className="text-4xl text-pink-500">
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  );
}
