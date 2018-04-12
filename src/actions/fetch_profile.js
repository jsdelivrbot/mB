import { FETCH_PROFILE } from './types';

export function fetchProfile() {
    // Store our user object inside a variable
    const profile = USER_OBJECT_GOES_HERE;

    // Store profile details inside a variable
    const profileDetails = profile.details;

    // Store profile bag items inside a variable
    const profileItems = profile.items;

    // Store profile blog items inside a variable
    const profileBlog = profile.Blog;
    
    // Maybe this is stupid and an uncalled for action?

    // If returned user item is structured well this might not be called for?

    // It would be cool to have different components that make up the user profile only recieve each individual peice of state that is relevant to them.

    return {
        type: FETCH_PROFILE,
        payload: profileDetails
    }
}