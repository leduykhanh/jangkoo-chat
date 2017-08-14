'use strict';

const host = 'http://jangkoo.com/projects/inspection/api';
const createBody = data => (
            {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });

export default {
  api:{
    create_project: function (user_id,data) {
      let url = `${host}/${user_id}/project`,
          opt = {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          };

      return fetch(url, opt);
    },
    create_company: function (data) {
      let url = `${host}/company`,
          opt = createBody(data);

      return fetch(url, opt);
    },
    create_user: function (data) {
      let url = `${host}/user`,
          opt = createBody(data);

      return fetch(url, opt);
    },
    create_inspection: function (user_id,data) {
      let url = `${host}/${user_id}/inspection`,
          opt = {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          };

      return fetch(url, opt);
    },
     close_inspection: function (inspection_id,data) {
      let url = `${host}/inspections/${inspection_id}/close`,
          opt = createBody(data);

      return fetch(url, opt);
    },
    create_finding: function (inspection_id,data) {
      let url = `${host}/inspections/${inspection_id}/finding`,
          opt = createBody(data);

      return fetch(url, opt);
    },
    close_finding: function (finding_id,data) {
      let url = `${host}/findings/${finding_id}/close`,
          opt = createBody(data);

      return fetch(url, opt);
    },
    projects : function(user_id){
      let url = `${host}/${user_id}/projects`,
          opt = {
            method: 'get',
            headers: {
              'Content-Type': 'application/json'
            },
          };

      return fetch(url, opt);
    },
    companies : function(){
      let url = `${host}/companies`,
          opt = {
            method: 'get',
            headers: {
              'Content-Type': 'application/json'
            },
          };

      return fetch(url, opt);
    },
    inspections: function (user_id) {
      let url = `${host}/${user_id}/inspections`,
          opt = {
            method: 'get',
            headers: {
              'Content-Type': 'application/json'
            }
          };

      return fetch(url, opt);
    },
    inspection: function (id) {
      let url = `${host}/inspections/${id}`,
          opt = {
            method: 'get',
            headers: {
              'Content-Type': 'application/json'
            }
          };

      return fetch(url, opt);
    },
     users: function (id) {
      let url = `${host}/${id}/users`,
          opt = {
            method: 'get',
            headers: {
              'Content-Type': 'application/json'
            }
          };

      return fetch(url, opt);
    },
    finding: function (id) {
      let url = `${host}/findings/${id}`,
          opt = {
            method: 'get',
            headers: {
              'Content-Type': 'application/json'
            }
          };

      return fetch(url, opt);
    },
    project_inspections: function (user_id, project_id) {
      let url = `${host}/${user_id}/inspections/${project_id}`,
          opt = {
            method: 'get',
            headers: {
              'Content-Type': 'application/json'
            }
          };

      return fetch(url, opt);
    },
    upload_file: function (photo_uri) {
        const file = {
              uri : photo_uri,             // e.g. 'file:///path/to/file/image123.jpg'
              name :Date.now() + "" + photo_uri.replace(/^.*[\\\/]/, ''),            // e.g. 'image123.jpg',
              type  :'image/jpg'           // e.g. 'image/jpg'
            }

        const body = new FormData();
        body.append('fileToUpload', file);
        body.append('submit', "OK");
      let url = `${host}/upload.php`,
          opt = {
            method: 'post',
            headers: {
              'Content-Type': 'multipart/form-data;',
            },
            body: body
          };

      return fetch(url, opt);
    },
    reset: function (data) {
      let url = `${host}/auth/reset`,
          opt = {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          };

      return fetch(url, opt);
    }
  }
};
