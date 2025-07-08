import React, { useEffect } from "react";
import Nav from './shares/nav';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigation = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    axios.get(`https://notetaker-qqyn.onrender.com/singlenote/${id}`)
      .then((res) => {
        const data = res.data.mydata; 
         reset(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (data) => {
    axios.patch(`https://notetaker-qqyn.onrender.com/noteupdate/${id}`, data)
      .then((res) => {
        alert(res.data.message);
        navigation('/allnotes'); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Nav />
      <div className="row container mx-auto">
        <div className="col-md-12 text-center mt-5 text-warning">
          <h1>Edit Your Notes</h1>
        </div>
        <div className="col-md-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Title and Date */}
            <div className="d-flex gap-2 mt-5">
              <div className="form-group w-50">
                <label>Title</label>
                <input type="text" className="form-control"
                  {...register('title', { required: true })} />
                {errors.title && <span className="text-danger">Title is missing</span>}
              </div>
              <div className="form-group w-50">
                <label>Date</label>
                <input type="date" className="form-control"
                  {...register('updatedAt', { required: true })} />
                {errors.updatedAt && <span className="text-danger">Date is missing</span>}
              </div>
            </div>
            {/* Content */}
            <div className="form-group mt-5">
              <label>Note</label>
              <textarea className="form-control" rows="3"
                {...register('content', { required: true })}
              ></textarea>
              {errors.content && <span className="text-danger">Enter the content</span>}
            </div>
            <button type="submit" className="btn btn-warning mt-5 float-end">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
