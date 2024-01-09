import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const values = await Promise.all([photoPromise, userPromise]);

    console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}

export default handleProfileSignup;
