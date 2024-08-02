const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler,
  editNoteByIdHandler, deleteNoteByIdHandler,  } = require('./handler');
const routes = [
  {
    method: 'POST',
    path: '/notes',
    //handler: () => {},
    handler: addNoteHandler,
    /*options: {
      cors: {
        origin: ['*'],
      },*/
    },
    /*
    {
      method: 'GET',
      path: '/notes',
      handler: () => {},
    },
*/
    {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
   },
   {
    method: 'GET',
    path: '/notes/{id}',
    //handler: () => {},
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    //handler: () => {},
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    //handler: () => {},
    handler: deleteNoteByIdHandler,
  },

 ];
  
 module.exports = routes;