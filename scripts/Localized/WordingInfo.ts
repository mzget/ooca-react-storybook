/* eslint-disable */
//@ts-check
export const WordingInfo = {
  Skip: { TH: 'ข้าม', EN: 'Skip', },
  Submit: { TH: 'ส่ง', EN: 'Submit', },
  Continue: { TH: 'ดำเนินการต่อ', EN: 'Continue', },
  CallBack: { TH: 'โทรกลับ', EN: 'Call back', },
  Feedback: { TH: 'โปรดแสดงความคิดเห็นของคุณที่นี่', EN: 'Please enter your feedback', },
  Recommend: { TH: 'เขียนคำแนะนำ', EN: 'Write recommendations', },
  VideoProblem: { TH: 'Video Call ยังไม่เสร็จสมบูรณ์', EN: 'Video Call session wasn’t completed', },
  VideoConnection: { TH: 'มีปัญหาการเชื่อมต่อ Video Call', EN: 'Video Call has unstable connection', },
  Others: { TH: 'อื่นๆ', EN: 'Others', },
  Close: { TH: 'ปิด', EN: 'Close', },
  Success: { TH: 'สำเร็จ', EN: 'Success' }
}

export const Loc = {
  Quality: { TH: 'โปรดให้คะแนนคุณภาพบริการ', EN: 'Please rate our service', },
  Feedback: { TH: 'โปรดแสดงความคิดเห็นของคุณ', EN: 'Please give us some feedback', },
  Problem: { TH: 'โปรดระบุปัญหาที่พบ', EN: 'What was the worst problem', },
  Fisnish: { TH: 'โปรดแสดงความคิดเห็นของคุณที่นี่', EN: 'Please enter your feedback', },
  VideoProblem: { TH: 'Video Call ยังไม่เสร็จสมบูรณ์', EN: 'Video Call session wasn’t completed', },
  VideoConnection: { TH: 'มีปัญหาการเชื่อมต่อ Video Call', EN: 'Video Call has unstable connection', },
  Others: { TH: 'อื่นๆ', EN: 'Others', },
  ThankMSG: { TH: 'ขอบคุณสำหรับความคิดเห็นของคุณ', EN: 'Thank you for your feedback', },
  Continue: { TH: 'ดำเนินการต่อ', EN: 'Continue', },
  CallBack: { TH: 'โทรกลับ', EN: 'Call back', },
  BackRoom: { TH: 'กลับไปยังห้องรอตรวจ', EN: 'Back to waiting room' },
  PleaseNote: { TH: 'ขอบพระคุณที่ใช้บริการ OOCA', EN: 'Thank you for choosing OOCA' },
  PleaseNoteDetail: {
    TH: `ค่าบริการปรึกษาจะถูกชำระเมื่อคุณได้รับบันทึกสรุปการสนทนา`, EN: `The consultation fee will be paid after
     you've received a visit note summary from our consultant`
  },
  FeedbackSuccess: {
    TH: 'ส่งคำแนะนำเรียบร้อยแล้ว',
    EN: 'Your recommendation has been submitted'
  }
}

export const ProviderLocalized = {
  PleaseNote: {
    TH: 'โปรดทราบ',
    EN: 'Please note'
  },
  PleaseNoteDetail: {
    TH: `กรุณาส่งบันทึกสรุปการสนทนาให้ลูกค้าภายใน 15 วันหลังการปรึกษา หากเกินเวลาที่กำหนดจะไม่สามารถ
    เรียกเก็บเงินจากลูกค้าได้`,
    EN: `Please submit the visit note to your client within 15 days after the session.
  Otherwise service fee will not be collected.` },
  FollowUp: {
    FollowUpPlanHeader: {
      TH: `โปรดเลือกการติดตามผลขั้นตอนต่อไป สำหรับลูกค้ารายนี้`,
      EN: `What's the next step for this client ?`
    },
    FollowUpChoices: [
      {
        TH: 'นัดหมายติดตามผลครั้งต่อไป',
        EN: 'Make a follow up session'
      }, {
        TH: 'ไม่ต้องนัดหมายเพิ่ม',
        EN: 'No need to follow up'
      }, {
        TH: 'แจ้งลูกค้าให้เข้ารับการรักษาที่โรงพยาบาล',
        EN: 'Refer client to the nearest hospital'
      }
    ],
    FollowUpSubChoices: [
      {
        TH: 'นัดหมายในสัปดาห์ถัดไป',
        EN: 'Next week'
      }, {
        TH: 'นัดหมายในสองสัปดาห์ถัดไป',
        EN: 'Next two week'
      }, {
        TH: 'นัดหมายในเดือนถัดไป',
        EN: 'Next month'
      }
    ]
  }
}

export const SumaryAppointmet = {}

// const MSGSteateInfo={Quality:{TH:'โปรดให้คะแนนคุณภาพบริการ',EN:'Please rate our service.',isActive:true},
//                      Feedback:{TH:'โปรดแสดงความคิดเห็นของคุณ',EN:'Please give us some feedback.',isActive:false},
//                      Problem:{TH:'โปรดระบุปัญหาที่พบ',EN:'What was the worst problem.',isActive:false},
//                      Fisnish:{TH:'ขอบคุณสำหรับความคิดเห็นของคุณ',EN:'Thank you for your feedback.',isActive:false},
//                     }
// const WordingInfo={Skip:{TH:'ข้าม',EN:'Skip',},
//                    Submit:{TH:'ส่ง',EN:'Submit',},
//                    Continue:{TH:'ดำเนินการต่อ',EN:'Continue',},
//                    CallBack:{TH:'โทรกลับ',EN:'Call back',},
//                    Feedback:{TH:'โปรดแสดงความคิดเห็นของคุณที่นี่',EN:'Please enter your feedback',},
//                    VideoProblem:{TH:'Video Call ยังไม่เสร็จสมบูรณ์',EN:'Video Call session wasn’t completed',},
//                    VideoConnection:{TH:'มีปัญหาการเชื่อมต่อ Video Call',EN:'Video Call has unstable connection',},
//                    Others:{TH:'อื่นๆ',EN:'Others',},
//                   }