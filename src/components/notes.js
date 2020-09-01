const MyHeader = () => {
    return (
      <header>
        <div>Hello, World!</div>
      </header>
    );
  }
  
  const MyFooter = () => {
    return (
      <footer>
        <div>Goodbye, World!</div>
      </footer>
    );
  }
  
  const MyApp = () => {
    return (
      <div>
        <MyHeader />
        <main>Stuff...</main>
        <MyFooter />
      </div>
    );
  }

  //component implementation.
  //APP = root element/main component.
  //APP can be made up of other components.
  //APP is a template.
  //JSX is our JS/html templating language.
  //only one root per component.
  //^this is different than the root of the app.
  //^one PARENT ELEMENT, in this case.


  //and finally: JSX fragments:::
  //adjacent JSX must be wrapped in a parent tag.
  //if no applicable parent html tage use the::
  //fragment tag or "dummy element"

//example of dummy element tag:
  const BasicallyGreat = () => {
    return (
      <>
        <h1>Thing</h1>
        <h2>Stuff</h2>
      </>
    );
  };

//other JSX fragment examples:

  const TotallyFine = () => {
    return (
      <div>
        <h1>Thing</h1>
        <h2>Stuff</h2>
      </div>
    );
  };
  //commented out bc throws errors::

//   const TotallyNotFine = () => {
//     return (
//       <h1>Thing</h1>
//       <h2>Stuff</h2>
//     );
//   };


/*

MAPPING ARRAYS:
mucho importanto array methodo:

const values = [1, 2, 3];

const squares = values.map(function (val, idx) {
  return val * val;
});

looping in JSX

with map:

const friends = [
  { name: 'Matt' },
  { name: 'Josie' },
  { name: 'Sandra' }
];

const FriendList = () => {
  return (
    <ul>
    {
      friends.map(
        (friend, idx) => (
          <li key={ idx }>{ friend.name }</li>
        )
      )
    }  
    </ul>
  );
}

const values = [1, 2, 3];
const square = x => x * x;

const Math = () => {
  return (
    <ul>
    {
      values.map((value, idx) => (
        <li key={ idx }>
          { value } squared is { square(value) }
        </li>
      ))
    }
    </ul>
  )
}


*/


/*

fucking STATE:

1. rule: never mutate the state.

MUTANT STATE:
Let's suppose that the state is equal to a complex object (an array or an object):

***const [user, setUser] = useState({ username: 'matt', isAdmin: 'true' })

And I wanted to update the state. You might be tempted to do this:

const handleAdminToggleClick = () => {
  user.isAdmin = !user.isAdmin
}

This mutates (or changes) the user object.
 However, the mutation doesn't trigger any updates in React.
  So that won't really do anything. !!!!!!

  INSTEAD ALWAYS UPDATE STATE DIRECTLY:
  setState.

  or in this case, setUser();

  as seen below:
  const handleAdminToggleClick = () => {
  const updatedUser = {};
  updatedUser.username = user.username;
  updatedUser.isAdmin = !user.isAdmin;

  setUser(updatedUser);


  OR THE SIMPLIFIED VERSION-->
  The spread operator will copy over
   all properties (including isAdmin),
    and any duplicates after that will
     override their corresponding values:
  const handleAdminToggleClick = () => {
  const updatedUser = {
    ...user,
    isAdmin: !user.isAdmin
  };

  setUser(updatedUser);
}
}

*/


/*

What is .findIndex()?
Well, you may recall we've used .indexOf() to find something
like a string 'you' in an array of ['you', 'me']. But since objects
are pass-by-reference (and the count may be different anyway!), we can't
use .indexOf(). Instead we use .findIndex(), which checks each element against
a condition. This method works much like .filter(), except that it just returns
the index of the first array element that passes said condition. */


//THINGS YOU NEED TO HAVE TAKEN FROM THIS:

/*

>React
    >Component architecture
    >Props
    >State with useState
    >Passing functions to child components
    >Communicating between components through a nearest ancestor
    >Avoiding state mutation
    >Styling components
    >onClick click handlers for react components
    >React forms via controlled components
>Project Structure
    >Having a single insertion point, and a folder of components
>AJAX
    >Making an ajax request on demand

*/