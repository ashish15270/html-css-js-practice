

export default function App(){
  return (
    <section>
       <h1>Signup form</h1>
    <form action="">

      <label htmlFor="username">Email:</label>
        <input id="email" class="email" type="email" defaultValue="ashish.kumar@gmail.com" placeholder="ashish.kumar@gmail.com" name="email"/>
      
      <label htmlFor="pwd">Password</label>
        <input type="password" class="pwd" id="pwd" defaultValue="" name="password" />

      <label htmlFor="description">
        Description
        <textarea name="description" id="discription" placeholder="This is the description"></textarea>
      </label>
      
      <fieldset>
        <legend>Employemnt status</legend>
        <label> 
        <input type="radio" name="emplyment" value="unemployed" defaultChecked={true}/>
        Unemployed
        </label>
        <label> 
        <input type="radio" name="emplyment" value="employed" />
        Employed
        </label>
        <label> 
        <input type="radio" name="emplyment" value="part-time-employed" />
        Part time employed
        </label>
      </fieldset>

      <fieldset>
          <legend>Dietary Restriction</legend>
        <label htmlFor="">
          <input type="checkbox" name="dietary resstriction" id="" value="kosher" />
          Kosher
        </label>
        <label htmlFor="">
          <input type="checkbox" name="dietary resstriction" id="" value="vegan" />
          Vegan
        </label>
        <label htmlFor="">
          <input type="checkbox" name="dietary resstriction" id="" value="gluten-free" />
          Gluten free
        </label>
      </fieldset>

      <button>Submit</button>

    </form>
    </section>
  )
}
