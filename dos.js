import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
stages: [
{ duration: "30s", target: 50 },
{ duration: "1m", target: 50000 },
{ duration: "2m", target: 0 },
],
thresholds: {
http_req_failed: ["rate<0.05"],
http_req_duration: ["p(95)<500"],
},
};

export default function () {
const url = "http://10.50.2.11:3001/api/v1/send-feedback";

const payload = JSON.stringify({
name: "fdf",
email: "fdfdfdf@gmail.com",
phone: null,
department: "Head Office",
opinion: "complaint",
message:
"SMCT-XLC1D5KT7QJUTWSDEJ0BNWNUFEIBSKKQ8LUCBCWPBHNIK1OANC",
});

const params = {
headers: {
"Content-Type": "application/json",
},
};

const res = http.post(url, payload, params);

check(res, {
"status is 200 or 201": (r) => r.status === 200 || r.status === 201,
});

sleep(1);
}
