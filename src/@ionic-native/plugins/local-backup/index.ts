import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name LocalBackup
 * @description
 * This plugin to create local backup
 *
 * @usage
 * ```typescript
 * import { LocalBackup } from '@ionic-native/local-backup/ngx';
 *
 *
 * constructor(private localBackup: LocalBackup) { }
 *
 * ...
 *
 *
 * this.localBackup.create({data: {key: 'value'}})
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'LocalBackup',
  plugin: 'cordova-plugin-local-backup',
  pluginRef: 'LocalBackup',
  repo: 'https://github.com/MaximBelov/cordova-plugin-local-backup',
  install: 'ionic cordova plugin add cordova-plugin-local-backup',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class LocalBackup extends IonicNativePlugin {
  @Cordova()
  create(data: any): Promise<boolean> {
    return;
  }

  @Cordova()
  read(): Promise<any>{
    return;
  }

  @Cordova()
  exists(): Promise<boolean>{
    return;
  }

  @Cordova()
  remove(): Promise<boolean>{
    return;
  }
}
