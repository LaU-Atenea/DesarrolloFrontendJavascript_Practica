import { createAd } from "./createAdModel.js";
export const createAdController = (form) => {

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const adElement = form.querySelector('#ad');
        const ad = adElement.value;
    
        try {
          await createAd(ad)
          setTimeout(() => {
            window.location = '/';
          }, 2000)
        } catch (error) {
          alert(error.message)
        }
      })

}