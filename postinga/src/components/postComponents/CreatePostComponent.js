import React,{useContext} from "react"

const Context = React.createContext

export default function CreatePostComponent(){
    return (
            <div>
                <div className="card">
                    <h2 className="align-center  font-weight-bold">Create Post</h2><br/><br/>
                    <form>
                        <div className="form-group">
                           <input type="text"/><br/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Post Content</label>
                            <textarea type="text" name="testimonialBody" placeholder="Enter testimony body" rows="8" ></textarea>
                        </div>
                    </form>

                    <input type="submit" value="Post Testimony"/>
                </div>
            </div>
    )
}