import { Common } from './pusher.common';
import { Options } from './interfaces';
export * from './interfaces';
export * from './enums';
export declare class Pusher extends Common {
    _connectionCallback: any;
    ios: PTPusher;
    private _options;
    private _delegate;
    private _presenceDelegate;
    constructor(apiKey: string, options?: Options);
    connect(callback?: Function): void;
    disconnect(): void;
    subscribeToChannelEvent(channelName: string, event: string, callback: Function): void;
    subscribeToChannel(channelName: string, callback?: Function): void;
    subscribePresence(channelName: string, callback?: Function): void;
    subscribeToPrivateChannel(channelName: string, callback?: Function): void;
    subscribeToPrivateChannelEvent(channelName: string, event: string, callback: Function): void;
    unsubscribeAll(): void;
    unsubscribeEvent(channelName: string, event: string): void;
    unsubscribePrivateEvent(channelName: string, event: string): void;
    unsubscribe(channelName: string): void;
    unsubscribePrivate(channelName: string): void;
}
