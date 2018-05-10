export const MSGSteateInfo = {
    Quality: { TH: 'โปรดให้คะแนนคุณภาพบริการ', EN: 'Please rate our service.', isActive: true },
    Feedback: { TH: 'โปรดแสดงความคิดเห็นของคุณ', EN: 'Please give us some feedback.', isActive: false },
    Problem: { TH: 'โปรดระบุปัญหาที่พบ', EN: 'What was the worst problem.', isActive: false },
    Thank: { TH: 'ขอบคุณสำหรับความคิดเห็นของคุณ', EN: 'Thank you for your feedback.', isActive: false },
    SendMSG: { TH: 'ระบบกำลังจัดเก็บความคิดเห็นของคุณ', EN: 'System is storing for your feedback.', isActive: false },
    SendFail: { TH: 'จัดเก็บความคิดเห็นของคุณ ล้มเหลว', EN: 'Storing for your feedback Failed.', isActive: false },
};
export const SendInfo = {
    provider_report_call_success: 'บอกว่า call สำเร็จมั้ย',
    provider_comment_call: 'ถ้าไม่สำเร็จ เกิดปัญหาอย่างไรบ้าง',
    provider_comment_ooca: 'comment ooca',
    rovider_comment_patient: 'comment patient ',
    provider_rating_ooca: 'ให้ rating ooca 1-5 คะแนน',
    provider_rating_patient: 'ให้ rating patient 1-5 คะแนน',
};
export const FeedbackInfo = {
    rating: true,
    problem: null,
    problem_other: "",
    feedback: null,
};
export const DialogMessages = {
    NetworkWarning: {
        TH: `Internet connection!`,
        EN: `Internet connection!`
    },
    NetworkSpeed: {
        TH: `ความเร็วอินเตอร์เน็ตของคุณ ไม่เหมาะต่อการใช้งาน video-call`,
        EN: `Your internet speed may effect bad video-call experience.`
    },
    VideoSpeedWarning: {
        TH: `ความเร็วอินเตอร์เน็ตของคุณ ไม่สามารถใช้งาน video ได้`,
        EN: `Your internet speed cannot use video track.`
    }
};
export const options = { not_completed: 'not_completed', unstable: 'unstable', other: 'other' };
