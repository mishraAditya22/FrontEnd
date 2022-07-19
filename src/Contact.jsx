import React from 'react';

const Contact = ()=>{
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Full Name </label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your full name"/>
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Email Id</label>
                            <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="JuppingJackz4@hotmail.com"/>
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Phone No</label>
                            <input type="number" class="form-control" id="formGroupExampleInput2" placeholder="Enter tour mobile no"/>
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Note</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter anything for us "/>
                        </div>
                        <button className="sub" type="submit"> Send </button>
                    </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;