/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 22:29:47
 * @LastEditTime: 2019-08-25 10:48:25
 * @LastEditors: Please set LastEditors
 */
const columnIdObj = {
    home:{
        lxrl:'8a2a08425b7a0b7b015b7a105a640003'
    },
    announcement:{
        tzgg:'8a2a08425b7a0b7b015b7a9d0b2e000a',
        dcwj:'8a2a08425b7a0b7b015b7aa19a60000e',
        zsjs:'8a2a08425b7aa230015b7aa6740b0002',
    },
    LeaderCalendar:{
        szyw:'4028d1816c662433016c6645231c0002',
        gzdt:'4028d1816c662433016c664591540003',
        yxfc:'4028d1816c662433016c66462ab00004',
        jsjy:'4028d1816c662433016c66467e3b0005',
    },
    LeadingParty:{
        dzdg:'402880596c9388af016c93e0782c0000',
        kc:'4028d1816c668d33016c669a326f0001',
        ztjy:'4028d1816c668d33016c669ab70f0002',
        tszb:'4028d1816c668d33016c669bad560004',
        xfmf:'402880596cc45ad0016cc6994c8a0001',
    },
    PromotingDev:{
        ctxcj:'4028d1816c668d33016c66a0e2700008',
        jyxsd:'4028d1816c668d33016c66a14f990009',
        gxxyd:'4028d1816c668d33016c66a1a4ae000a',
        rcdj:'4028d1816c668d33016c66a1ef94000b',
        byll:'4028d1816c668d33016c66a23f9c000c',
    },
    HappyLife:{
        wx:'402880596c9388af016c945bee950001',
        sf:'402880596c9388af016c945d834e0002',
        hh:'402880596c9388af016c945dee2e0003',
        sy:'402880596c9388af016c945e3e710004',
        lndx:'4028d1816c668d33016c66a382c5000e',
        hdzd:'4028d1816c668d33016c66a4211f000f',
        sfsq:'4028d1816c668d33016c66a46e2a0010',
        xqxz:'4028d1816c668d33016c66a4b88a0011',
        jkzs:'4028d1816c668d33016c66a5e7460014',
        zysn:'4028d1816c668d33016c66a666260015',
    },
}
export default {
    list:`/tianti-module-interface/cms/api/article/list`,
    detail:`/tianti-module-interface/cms/api/article/detail`,
    branchList:'/tianti-module-interface/partyBranch/api/list',
    myBranch:'/tianti-module-interface/partyBranch/api/myBranch',
    partyMembers:'/tianti-module-interface/partyBranch/api/partyMembers',
    branchActivity:'/tianti-module-interface/partyBranch/api/myBranchHD',
    partyNews:'/tianti-module-interface/partyBranch/api/partyNews',
    branchSignIn:'/tianti-module-interface/partyBranch/api/joinHD',
    teamList:'/tianti-module-interface/cms/api/team/list',
    myTeam:'/tianti-module-interface/cms/api/team/myTeam',
    teamActivity:'/tianti-module-interface/cms/api/team/myTeamHD',
    teamSignIn:'/tianti-module-interface/cms/api/team/joinHD',
    teamNews:'/tianti-module-interface/cms/api/team/teamNews',
    teamMembers:'/tianti-module-interface/cms/api/team/teamMembers',
    msgList:'/tianti-module-interface/user/api/myMsg',
    deleteMsg:'/tianti-module-interface/user/api/deletemsg',
    suggessList:'/tianti-module-interface/suggestion/api/list',
    login:'/tianti-module-interface/user/api/login',
    changePwd:'/tianti-module-interface/user/api/changepwd',
    findFriend:'/tianti-module-interface/user/api/findfriendsubmit',
    problem:'/tianti-module-interface/user/api/helpsubmit',
    suggestion:' /tianti-module-interface/suggestion/api/suggestionsubmit',
    columnIdObj,
}