import React, { useState } from 'react'
function ControllForms1() {
    const [name ,setName]=useState('');
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div>
            <label>Name:</label>
            <input type="text"
                //    value=""
                   id="name"/>
        </div>
        <div>
            <label>LastName:</label>
            <input type="text"
                //    value=""
                   id="lname"/>
        </div>
        <div>
            <label>age:</label>
            <select 
                //    value=""
                   id="age">
                   <option>21</option>
                   <option>22</option>
                   <option>23</option>
                   <option>24</option>
                   <option>25</option>
                   <option>26</option>
                   <oprion>27</oprion>
             </select>
        </div>
        <button type="submit" value="Submit">Submit</button>
      </form>
    </div>
  )
}

export default ControllForms1;
