import api from "../utils/api"

const CompanyController = {

   getCompanyData() {
      return api.get('http://localhost:3333/company')
   },

}

export default CompanyController