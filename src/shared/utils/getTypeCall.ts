import { ICall } from "../../entities/calls/types";

export const getCallType = (call: ICall): 'Incoming' | 'Outgoing' | 'Missed' | 'NoAnswer' => {
    if (call.in_out === 1) {
        return call.status === 'Дозвонился' ? 'Incoming' : 'Missed';
    } else {
        return call.status === 'Дозвонился' ? 'Outgoing' : 'NoAnswer';
    }
};