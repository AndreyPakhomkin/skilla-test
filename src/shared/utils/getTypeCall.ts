import { ICall } from "../../entities/calls/types";

export const getCallType = (call: ICall): 'incoming' | 'outgoing' | 'missed' | 'noanswer' => {
    if (call.in_out === 1) {
        return call.status === 'Дозвонился' ? 'incoming' : 'missed';
    } else {
        return call.status === 'Дозвонился' ? 'outgoing' : 'noanswer';
    }
};