import { Activity } from "../types/activities";

const fetchActivities = async (participants: number, signal: any): Promise<Activity> => {
    const apiUrl = `http://www.boredapi.com/api/activity?participants=${participants}`;
    try {
      let response = await fetch(apiUrl, {
        signal: signal,
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      return await response.json();
    } catch (error: any) {
      throw new Error(error)
    }
  }
  
  const activity = async(participants: number, signal: any): Promise<Activity> => {
    return await fetchActivities(participants, signal);
  }


  export { activity };