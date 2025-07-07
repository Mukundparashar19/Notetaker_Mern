import React, { useEffect, useState } from "react";
import Nav from "./shares/nav";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Allnotes() {
  const [allnote, setallnote] = useState([]);
  const myNotes = () => {
    axios.get("http://localhost:7000/noteslist").then((d) => {
      setallnote(d.data.notelist);
    });
  };

  useEffect(() => {
    myNotes();
  }, []);

  return (
    <div>
      <Nav />
      <div className="row container mx-auto d-flex justify-content-center">
        <div className="col-md-12 text-center mt-3 text-warning">
          <h1>All Notes</h1>
        </div>
        {/* card  */}
        {allnote.map((n, index) => {
          return (
            <div className="col-md-3  card text-bg-warning mx-1 mb-3 h-100" key={index}>
              <div class="card-header">{n.updatedAt.slice(0, 10)}</div>
              <div class="card-body">
                <h5 class="card-title">{n.title}</h5>
                <p class="card-text small">{n.content.split(" ").slice(0, 30).join(" ")}
                                            {n.content.split(" ").length > 30 && " ..."}</p>
                <div className="d-flex gap-2 ">
                  <Link
                    to={"viewnotes/" + n._id}
                    type="button"
                    class="btn btn-info"
                  >
                    View
                  </Link>
                  <Link
                    to={"editnote/" + n._id}
                    type="button"
                    class="btn btn-secondary"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
