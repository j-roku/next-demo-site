import axios from 'axios';

const apiRoute = 'https://test-6.sakura.ne.jp/wp/wp-test/wp-json';


const getPosts = async (opts) => {

  const endPoint = `${apiRoute}/wp/v2/${opts.postType || 'post'}`;

  const params = {};
  if(opts.fields) params._fields = opts.fields;
  if(opts.postsPerPage) params.per_page = opts.postsPerPage

  try {
    const res = await axios.get(endPoint, {
      method: 'get',
      responseType: 'JSON',
      params: params,
    });
    return res.data || null;
  } catch(err) {
    console.error(err);
  }

}

const getPost = async (opts) => {

  const endPoint = `${apiRoute}/wp/v2/${opts.postType || 'post'}`;

  const params = {};
  if(opts.id) params['include'] = opts.id;

  try {
    const res = await axios.get(endPoint, {
      method: 'get',
      responseType: 'JSON',
      params: params,
    });
    return res.data || null;
  } catch(err) {
    console.error(err);
  }

}


export {getPosts,getPost}



