import Vue from 'vue';

interface Options {
  endpoints: {
    verify: string;
    login: string;
    logout: string;
  };
}

export interface AuthPlugin {
  endpoints: {
    verify: string;
    login: string;
    logout: string;
  };
}

export default class AuthPluginClass {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  options: Options | null = null;

  install(vue: typeof Vue, options: Options) {
    this.options = options;
    vue.prototype.$auth = {
      login: this.login,
      logout: this.logout,
      verify: this.verify
    };
  }

  private login(body: any) {
    if (!this.options) {
      return Promise.reject(new Error('Endpoints must be defined'));
    }
    return postJson(this.options?.endpoints.login, {body});
  }

  private logout() {
    if (!this.options) {
      return Promise.reject(new Error('Endpoints must be defined'));
    }
    return postJson(this.options?.endpoints.logout);
  }

  private verify(): Promise<boolean> {
    if (!this.options) {
      return Promise.reject(new Error('Endpoints must be defined'));
    }
    return postJson(this.options?.endpoints.verify).then(
      (r) => r.status === 'ok'
    );
  }
}

function postJson(url: string, init?: any) {
  const opts = {
    ...init,
    method: 'post',
    headers: {
      ...init.headers,
      'content-type': 'application/json'
    },
    body: init.body ? JSON.stringify(init.body) : undefined
  };
  return fetch(url, opts).then((r) => (r.ok ? r.json() : Promise.reject(r)));
}
