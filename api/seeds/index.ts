import { AzureFunction, Context, HttpRequest } from '@azure/functions'

const seeds: AzureFunction = async function (context: Context, req: HttpRequest) {
  context.res = {
    status: 200,
    body: {
      seeds: [
        { id: 'maple',   name: 'Maple Bonsai' },
        { id: 'juniper', name: 'Juniper Bonsai' },
        { id: 'pine',    name: 'Pine Bonsai' },
      ],
    },
  }
}
export default seeds