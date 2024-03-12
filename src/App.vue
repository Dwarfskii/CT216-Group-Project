<template>
  <h1>{{  title }}</h1>
  <teleport to=".modals" v-if="showModal">
    <Modal  theme="" @close="toggleModal">
      <h2>Please login to your spotify account</h2>
            <br>
            <p>First name: <input id="firstNameIn" placeholder="First name"></p>
            <p>Last name: <input id="lastNameIn" placeholder="Last name"></p>
            <p>Email: <input id="emailIn" placeholder="Email"></p>
            <p>Password: <input id="passwordIn" placeholder="Password"></p>
            <button @click="check">Register Now</button>
            
            <p>First Name</p>
            <p id="outFirstName">--------</p>
            <p>Last Name</p>
            <p id="outLastName">--------</p>
            <p>Email</p>
            <p id="outEmail">--------</p>
            <p>Password</p>
            <p id="outPassword">--------</p>
    </Modal>
  </teleport>
  
  <head>
        <title> Home Page</title>
        <link rel="stylesheet" type="text/css" href="software dev test.css">    
    </head>
    <body>
        <header class="mainSubject">
            <h1>Spotify</h1>
        </header>
    
        <ul>
            <li @click="togglePageOne" :class="{ active: pageOne }">One</li>
            <li @click="togglePageTwo" :class="{ active: pageTwo }">Two</li>
            <li @click="togglePageThree" :class="{ active: pageThree }">Three</li>
            <li @click="togglePageFour" :class="{ active: pageFour }">Four</li>
        </ul>
        <br>
        <br>
        <div v-if="pageOne">
        <table class="example">
            <tr class="example">
                <th class="example"><h1>Top 5 Artists</h1></th>
                <th class="example"><h1  class="songs" >Top 5 Tracks</h1></th>
            </tr>
            <tr class="example">
                <td>
                    <table>
                        <tr class="info">
                            <th class="info">Picture</th>
                            <th class="info"  >Name</th>
                            <th class="info"  >Description</th>
                        </tr>
                        <tr class="info">
                            <td class="info"><img src="@/assets/question mark.jpg" class="centre"></td>
                            <td class="info">Artist 1</td>
                            <td class="info">Description 1</td>
                        </tr>
                        <tr class="info">
                            <td class="info"><img src="@/assets/question mark.jpg" class="centre"></td>
                            <td class="info">Artist 2</td>
                            <td class="info">Description 2</td>
                        </tr>
                        <tr class="info">
                            <td class="info" ><img src="@/assets/question mark.jpg" class="centre"></td>
                            <td class="info">Artist 3</td>
                            <td class="info">Description 3</td>
                        </tr>
                        <tr class="info">
                            <td class="info"><img src="@/assets/question mark.jpg" class="centre"></td>
                            <td class="info">Artist 4</td>
                            <td class="info">Description 4</td>
                        </tr>
                        <tr class="info">
                            <td class="info"><img src="@/assets/question mark.jpg" class="centre"></td>
                            <td class="info">Artist 5</td>
                            <td class="info">Description 5</td>
                        </tr>
                    </table>
                </td>
              
                <td>
                 
                    <table >
                    
                        <tr class="info">
                            <th class="info">Album Photo</th>
                            <th class="info">Song Name</th>
                            <th class="info">Artist</th>
                        </tr>
                        <tr class="info">
                            <td class="info"><img src="@/assets/question mark.jpg" class="centre"></td>
                            <td class="info">Song 1</td>
                            <td class="info">Artist 1</td>
                        </tr>
                        <tr class="info">
                            <td class="info"><img src="@/assets/question mark.jpg" class="centre"></td>
                            <td class="info">Song 2</td>
                            <td class="info">Artist 2</td>
                        </tr>
                        <tr class="info">
                            <td class="info"><img src="@/assets/question mark.jpg" class="centre"></td>
                            <td class="info">Song 3</td>
                            <td class="info">Artist 3</td>
                        </tr>
                        <tr class="info">
                            <td class="info"><img src="@/assets/question mark.jpg" class="centre"></td>
                            <td class="info">Song 4</td>
                            <td class="info">Artist 4</td>
                        </tr>
                        <tr class="info">
                            <td class="info"><img src="@/assets/question mark.jpg" class="centre"></td>
                            <td class="info">Song 5</td>
                            <td class="info">Artist 5</td>
                        </tr>
                   
                    </table>
                 
                </td>
             
            </tr>
        </table>
        </div>
        <div v-if="pageTwo">
          <h1> PAGE TWO</h1>
        </div>
        <div v-if="pageThree">
          <h1> PAGE THREE</h1>
        </div>
        <div v-if="pageFour">
          <h1> PAGE FOUR</h1>
        </div>
        
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        
    </body>
  
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: { Modal },
  data(){
    return{
      text:'Grab your ninja swag for half price',
      pageOne:true,
      pageTwo:false,
      pageThree:false,
      pageFour:false,
      showModal:true,
      firstName:'',
      lastName:'',
      email:'',
      password:''
   
    }
  },
  methods: {
    toggleModal(){
      this.showModal=!this.showModal
    },
    check(){
      var firstName=document.getElementById("firstNameIn").value;
      var lastName=document.getElementById("lastNameIn").value;
      var email=document.getElementById("emailIn").value;
      var password=document.getElementById("passwordIn").value;
    
      document.getElementById("outFirstName")
        .innerHTML=firstName;
      document.getElementById("outLastName")
        .innerHTML=lastName;
      document.getElementById("outEmail")
        .innerHTML=email;
      document.getElementById("outPassword")
        .innerHTML=password;


        if (email.includes("@" && ".")){
            this.showModal=false
        } 
        else{
          alert('Invalid email format. Please provide a valid email address.');
        }
    },
    togglePageOne(){
      if(!this.pageOne){
        this.pageOne=true
        this.pageTwo=false
        this.pageThree=false
        this.pageFour=false
      }
    
    },
    togglePageTwo(){
      if(!this.pageTwo){
        this.pageOne=false
        this.pageTwo=true
        this.pageThree=false
        this.pageFour=false
      }
    
    },
    togglePageThree(){
      if(!this.pageThree){
        this.pageOne=false
        this.pageTwo=false
        this.pageThree=true
        this.pageFour=false
      }
    
    },
    togglePageFour(){
      if(!this.pageTwo){
        this.pageOne=false
        this.pageTwo=false
        this.pageThree=false
        this.pageFour=true
      }
    
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
