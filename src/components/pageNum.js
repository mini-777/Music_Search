import React from "react";
import { Link } from "react-router-dom";
import "../routes/Home.css";

function PageNum({me}) {
  return (
  <div className="page">
    <a href="javascript:;" onClick={() => me.setPage(0)} >1</a> | <a href="#" onClick={() => me.setPage(5)}>2</a> | <a href="#" onClick={() => me.setPage(10)}>3</a> | <a href="#" onClick={() => me.setPage(15)}>4</a> | <a href="#" onClick={() => me.setPage(20)}>5</a>  
    </div>
  );
}

export default PageNum;
