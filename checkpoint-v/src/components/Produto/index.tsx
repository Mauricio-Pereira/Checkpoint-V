import ProdutoProps from "./interface";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import "./styles.css";

const Produto: React.FC<ProdutoProps> = ({ title, image, link, preco }) => {
  return (
    <div className="produto">
      <div className="produto-content">
        <Image className="produto-image" src={image} width={200} height={200}alt={"Nome do Produto " + title}
        />
      
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="produto-link"
      >
        {title} 
      </Link>
      <div className="produto-preco">R$ {preco}</div>
      </div>
    </div>
  );
};

export default Produto;
