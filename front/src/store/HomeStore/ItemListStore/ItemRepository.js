import {SERVER} from '../../../config/config.json';
import axios from 'axios';

class ItemListRepository {
    getItemList = async () => {
        try {
            const { data } = await axios.get(`${SERVER}/v1/post/dateSearch`,
            {
                headers: {
                  'access-token': localStorage.getItem('access_token'),
                }
              });
              return data;
        } catch (error) {
            return error;
        }
    }
}

// class ItemListRepository {
//     purchaseApproval = async () => {
//       try {
//         const { data } = await axios.get(`${SERVER}/members/is_allow?allow=0`, {
//           headers: {
//             'x-access-token': sessionStorage.getItem('Token'),
//           },
//         });
//         return data;
//       } catch (error) {
//         return error;
//       }
//     };

export default new ItemListRepository();