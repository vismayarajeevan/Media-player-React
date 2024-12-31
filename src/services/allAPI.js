

import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// 1. save video api - use post http request => it is used in add component


// a) create a function for save video . take argument as video details  from popup upload details
export const saveVideoApi = async (videoDetails)=>{

    // b) call common api function with post method
    return await commonAPI(`POST`,`${SERVERURL}/uploadVideo`,videoDetails)
}

// 2.create a function for get all videos api - get method in view component, already entered datas are desplayes in browser inside its useEffect hook

export const getAllVideoApi = async ()=>{
    return await commonAPI(`GET`,`${SERVERURL}/uploadVideo`,"")
}


// 3. saveHistory- use post method to http://localhost:3000/history 
// it is called by videocard when we click on video

export const saveHistoryAPI =async(historyDetails)=>{
    return await commonAPI(`POST`,`${SERVERURL}/history`,historyDetails)
}

// 3b. to show the videos on history :- use get method for http://localhost:3000/history .
// called by hitory , when it open in browser

export const getAllHistoryAPI = async()=>{
    return await commonAPI(`GET`,`${SERVERURL}/history`,"")
}

// delete history
// delete method is used http://localhost:3000/history/id
// it is called by delete button in history

export const deleteHistoryAPI= async(id)=>{
    return await commonAPI(`DELETE`,`${SERVERURL}/history/${id}`,{})
}


// remove video
// delete method is used  http://localhost:3000/uploadVideo/id
// it is called by delete button in videocard, it will delete when clicked on delete button

export const removeVideoAPI= async(id)=>{
    return await commonAPI(`DELETE`,`${SERVERURL}/uploadVideo/${id}`,{})
}


// add in categories
// use post method - http://localhost:3000/categories
// called by category component , when user click on add button in modal

// categoryDetails ={categoryName, allVideos}

export const saveCategoryAPI =async(categoryDetails)=>{
    return await commonAPI(`POST`,`${SERVERURL}/categories`,categoryDetails)
}


// to show in categories
// use get method - http://localhost:3000/categories
// called by category component , when component loaded in browser

export const getAllCtegoryAPI = async()=>{
    return await commonAPI(`GET`,`${SERVERURL}/categories`,{})
}


// delete categories
// use delete method - http://localhost:3000/categories
// called by category component

export const deleteCategoryAPI= async(id)=>{
    return await commonAPI(`DELETE`,`${SERVERURL}/categories/${id}`,{})
}

//update category 
// Use PUT method -  http://localhost:3000/categories/id
// called by category component, when video drop over the category

export const updateCategoryAPI= async(categoryDetails)=>{
    return await commonAPI(`PUT`,`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}