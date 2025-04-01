import React from "react";
import styles from "./NewsModal.module.css";
import { FaSearchLocation } from "react-icons/fa";
import { News } from "@/types/News";
import Image from "next/image";
import Link from "next/link";
// mix up both using divs and next/link
// for links, make sure the target="_blank"

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  news: News;
}

const NewsModal = ({
  isOpen,
  onClose,
  news
}: NewsModalProps) => {
  if (!isOpen) return null;


  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>
        <h2 className={styles.newsTitle}>{news.title}</h2>
        <br />
          <strong className={styles.newsAttribute}>
            Source &nbsp;
            <FaSearchLocation />
            &nbsp;
            <Link href={news.sourceLink} className={styles.source}>{news.sourceTitle}</Link>
            
          </strong>{" "}
          <Image src={news.image} alt={news.title} style={{ width: "100%" }}/>

        <p>
          <strong style={{ display: "block" }}>Description</strong>
          {news.description}
        </p>
        <br />{" "}
               </div>
      </div>
  );
};

export default NewsModal;
