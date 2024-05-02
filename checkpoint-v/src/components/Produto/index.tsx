import ProdutoProps from "./interface";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import "./styles.css";

const Produto: React.FC<ProdutoProps> = ({ title, image, link, preco }) => {
  return (
    <div className="produto">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="produto-content">
          <Image className="produto-image" src={image} width={200} height={200} alt={"Nome do Produto " + title} />
          <div className="produto-title">{title}</div>
          <div className="produto-preco">R$ {preco}</div>
        </div>
      </Link>
    </div>
  );
};


export default Produto;
