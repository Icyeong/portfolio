import momo from '../assets/image/work/momo.png';
import order from '../assets/image/work/QR_order.png';
import stack from '../assets/image/work/stack.png';
import todo from '../assets/image/work/todo.png';
import timtam from '../assets/image/work/timtam.png';
import lotte from '../assets/image/work/lotte.png';
import kungfu from '../assets/image/work/kungfu.png';
import tarot from '../assets/image/work/tarot.png';
import miero from '../assets/image/work/miero.png';

export const projects_dummyData = [
   {
      id: 1,
      title: 'MOMO',
      subTitle: '팀 프로젝트 (6인 / 2022.12 ~ 진행중)',
      navTitle: 'MOMO (팀 프로젝트)',
      imgUrl: momo,
      brief: '모두 모임의 약자로 다양한 모임, 스터디, 멘토링 등을 주최하고, 관심 모임 참여를 할 수 있는 예약 웹어플리케이션',
      content: [
         'UI 디자인',
         '마이페이지/모임 목록 페이지/적립금 페이지/모달 구현',
         'TossPayments API를 이용한 카드 결제 기능 구현'
      ],
      stacks: ['Next.js', 'Recoil', 'JavaScript', 'Styled-components', 'Bootstrap5'],
      githubLink: 'https://github.com/project-momo/momo-fe',
      deployLink: 'https://www.momo-deploy.site'
   },
   {
      id: 2,
      title: 'QR오더',
      subTitle: '코드스테이츠 메인 프로젝트 (7인 / 2022.11 ~ 2022.12 4주)',
      navTitle: 'QR오더 (팀 프로젝트)',
      imgUrl: order,
      brief: '온라인 웹 메뉴판 제작 기능을 제공, QR 코드의 주문이 가능한 비대면 주문 시스템',
      content: [
         '프로젝트 기획 및 와이어프레임 설계',
         '랜딩 페이지, 사용자 주문 메뉴판 페이지 구현',
         '메뉴판 페이지 CRUD 기능 구현'
      ],
      stacks: ['React', 'Redux', 'JavaScript', 'Styled-components'],
      githubLink: 'https://github.com/codestates-seb/seb40_main_021',
      figma: 'https://www.figma.com/file/REQZPO8ktRt9aK2m0T9e8l/Main-project-(QR-%EC%98%A4%EB%8D%94)?node-id=0%3A1&t=lTiiXVyfW3DzPM2i-1'
   },
   {
      id: 3,
      title: '스택오버플로우 클론',
      subTitle: '코드스테이츠 프리 프로젝트 (7인 / 2022.10 ~ 2022.11 2주)',
      navTitle: '스택오버플로우 클론 (팀 프로젝트)',
      imgUrl: stack,
      brief: '기존 스택오버플로우 웹사이트의 UI 및 기능을 클론하여 제작',
      content: ['로그인, 회원가입, 가입 성공, 계정 복구 페이지, 마이페이지 구현', 'Auth 로그인, 회원가입 기능 구현'],
      stacks: ['React', 'Redux', 'JavaScript', 'Styled-components'],
      githubLink: 'https://github.com/Icyeong/seb40_pre_033'
   },
   {
      id: 4,
      title: 'Todo App',
      subTitle: '개인 프로젝트 (2023.01 / 3일)',
      navTitle: 'Todo App (개인 프로젝트)',
      imgUrl: todo,
      brief: 'wanted 에서 제공하는 server API를 이용해 todolist를 구현',
      content: ['UI 구현 및 제작', '로그인, 회원가입 기능 구현', 'todolist CRUD 구현'],
      stacks: ['React', 'Recoil', 'JavaScript', 'Styled-components'],
      githubLink: 'https://github.com/Icyeong/todo_app'
   },
   {
      id: 5,
      title: 'TimTam',
      subTitle: '개인 프로젝트 (2021년도 제작)',
      navTitle: 'TimTam (퍼블리싱)',
      imgUrl: timtam,
      brief: '호주 브랜드인 초콜릿을 하나의 브랜드로 기획하고 소개하는 웹사이트',
      content: ['디자인 및 퍼블리싱 100% (반응형)'],
      stacks: ['HTML5', 'CSS3', 'jQuery'],
      githubLink: 'https://github.com/Icyeong/timtam.git',
      deployLink: 'https://icyeong.github.io/timtam',
      figma: 'https://www.figma.com/file/6PldIOVblbltzB3aYuCurJ/TimTam?node-id=0%3A1&t=KmAwucMdUSFd6Dbn-1'
   },
   {
      id: 6,
      title: '롯데호텔',
      subTitle: '개인 프로젝트 (2021년도 제작)',
      navTitle: '롯데호텔 (퍼블리싱)',
      imgUrl: lotte,
      brief: '기존의 제주 롯데호텔 웹사이트를 새롭게 디자인 후 제작한 웹사이트',
      content: ['디자인 및 퍼블리싱 100% (반응형)'],
      stacks: ['HTML5', 'CSS3', 'jQuery'],
      githubLink: 'https://github.com/Icyeong/lotte_hotel.git',
      deployLink: 'https://icyeong.github.io/lotte_hotel',
      figma: 'https://www.figma.com/file/NCMRgavA2eJMgwKQjnsLFf/%EB%A1%AF%EB%8D%B0%ED%98%B8%ED%85%94?node-id=0%3A1&t=if6CuQugNgyU4q81-1'
   },
   {
      id: 7,
      title: '쿵푸팬더',
      subTitle: '개인 프로젝트 (2021년도 제작)',
      navTitle: '쿵푸팬더 (퍼블리싱)',
      period: '',
      imgUrl: kungfu,
      brief: '영화 쿵푸팬더의 캐릭터와 시리즈를 소개하는 웹사이트',
      content: ['디자인 및 퍼블리싱 100% (반응형)'],
      stacks: ['HTML5', 'CSS3', 'jQuery'],
      githubLink: 'https://github.com/Icyeong/kungfu_panda.git',
      deployLink: 'https://icyeong.github.io/kungfu_panda',
      figma: 'https://www.figma.com/file/OshAhvvJMbITZSQrtdJ5K5/%EC%BF%B9%ED%91%B8%ED%8C%AC%EB%8D%94?node-id=0%3A1&t=DgMakxF7hJOPXmdw-1'
   },
   {
      id: 8,
      title: 'Ms.fortune',
      subTitle: '개인 프로젝트 (2021년도 제작)',
      navTitle: 'Ms.fortune (퍼블리싱)',
      period: '',
      imgUrl: tarot,
      brief: '타로카드를 이용한 간단한 타로점을 봐주는 웹앱을 제작',
      content: ['퍼블리싱 100%'],
      stacks: ['HTML5', 'CSS3', 'jQuery'],
      githubLink: 'https://github.com/Icyeong/Ms.fortune',
      deployLink: 'https://icyeong.github.io/Ms.fortune'
   },
   {
      id: 9,
      title: '미에로화이바 클론',
      subTitle: '개인 프로젝트 (2021년도 제작)',
      navTitle: '미에로화이바 클론 (퍼블리싱)',
      period: '',
      imgUrl: miero,
      brief: '미에로 화이바 웹사이트 클론',
      content: ['퍼블리싱 100% (반응형)'],
      stacks: ['HTML5', 'CSS3', 'jQuery'],
      githubLink: 'https://github.com/Icyeong/miero.git',
      deployLink: 'https://icyeong.github.io/miero'
   }
];
