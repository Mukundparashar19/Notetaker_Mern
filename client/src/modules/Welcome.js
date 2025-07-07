import React from "react";
import Nav from './shares/nav'
import { useForm } from 'react-hook-form';
import axios from 'axios';


export default function Welcome() {

    const { register, handleSubmit, formState: { errors } } = useForm();

      const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:7000/registernote",data)
    .then((res) =>{
      alert(res.data.message)
    })
    .catch((error) =>{
      console.log(error);      
    })


  };

  return (
    <div>
        <Nav/>
      <div className="row container mx-auto">
        <div className="col-md-12 text-center mt-5 text-warning">
          <h1>Enter Your Notes</h1>
        </div>
        <div className="col-md-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name and date  */}
            <div className="d-flex gap-2 mt-5">
              <div class="form-group w-50">
                <label>Title</label>
                <input type="text" class="form-control"
                {...register('title',{required:true})} />
                {errors.title && <span className="text-danger">Title is missing</span>}

              </div>
              <div class="form-group w-50">
                <label>Date</label>
                <input type="date" class="form-control" 
                {...register('updatedAt',{required:true})}/>
                {errors.title && <span className="text-danger"> Date is missing</span>}
              </div>
            </div>
           {/* txt area  */}
            <div class="form-group mt-5">
              <label>Note</label>
              <textarea class="form-control" rows="3"
              {...register('content',{required:true})}
              ></textarea>
              {errors.content && <span className="text-danger">Enter the content</span>}
            </div>
            <button type="submit" class="btn btn-warning mt-5 float-end">Add Notes</button>

          </form>
        </div>
      </div>
    </div>
  );
}
