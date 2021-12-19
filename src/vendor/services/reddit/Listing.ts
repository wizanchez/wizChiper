/* eslint-disable import/prefer-default-export */
import wizHttp from '../../wizFramework/wizHttp';
import { useEffect, useState } from 'react';
import { wizDateConvertFormatUTC } from '../../wizFramework/wizDate';
import { wizNumberFormatInt } from '../../wizFramework/wizNumber'
const SERVER = 'https://api.reddit.com/';
interface PropsRedditList {
  kind: string;
  data: {};
};
interface PropsDataSent {
  created_utc_moment: string;
  num_comments_f: string;
  score_f: string;
  created_utc: number;
  num_comments: number;
  score: number;
}
export const useRedditList = (props?: {}) => {
  const [infoRequest, setInfoRequest] = useState({ val: false, isLoaded: false, valMsg: 'Load', total: 0, childrenMain: [], childrenCreate: [], childrenHot: [], childrenPopular: [] });
  useEffect(() => {
    async function launchHttp(props: any) {
      try {
        const url = 'getmobile/getTransfer';
        const body = props;

        const resp: any = await wizHttp.instance.get({
          url: 'r/pics/hot.json',
          server: SERVER,
        });
        const kind: string = resp.kind;
        const data: any = resp.data;
        const isListing: boolean = (kind === 'Listing') || false;
        const total: number = data.dist;
        const children: [] = data.children;
        const valMsg: string = 'OK';
        let childrenMain: [] = [];
        let childrenHot: [] = [];
        let childrenPopular: [] = [];

        const childrenCreate = children.map((result: { data: { created_utc: number, num_comments: number, score: number }, }) => {
          const dataResult = result.data;
          const created_utc = dataResult.created_utc;
          const num_comments = dataResult.num_comments;
          const score = dataResult.score;
          const created_utc_moment = wizDateConvertFormatUTC(created_utc);
          const score_f = wizNumberFormatInt(score);
          const num_comments_f = wizNumberFormatInt(num_comments);
          const dataSent: PropsDataSent = {
            ...dataResult,
            created_utc_moment,
            num_comments_f,
            score_f
          }
          childrenMain.push(dataSent);
          childrenHot.push(dataSent);
          childrenPopular.push(dataSent);
          return dataSent;
        });

        childrenCreate.sort(function (a: { created_utc: number }, b) {
          if (a.created_utc < b.created_utc) {
            return 1;
          }
          if (a.created_utc > b.created_utc) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        childrenHot.sort(function (a: { score: number }, b: { score: number }) {
          if (a.score < b.score) {
            return 1;
          }
          if (a.score > b.score) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        childrenPopular.sort(function (a: { num_comments: number }, b: { num_comments: number }) {
          if (a.num_comments < b.num_comments) {
            return 1;
          }
          if (a.num_comments > b.num_comments) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });


        setInfoRequest({
          val: isListing,
          isLoaded: true,
          valMsg,
          total,
          childrenMain,
          childrenHot,
          childrenCreate,
          childrenPopular
        });
      } catch (err) {
        const loadError: boolean = false;
        setInfoRequest({
          val: loadError,
          isLoaded: true,
          valMsg: 'Error al conectar a reddit',
          total: 0,
          childrenMain: [],
          childrenHot: [],
          childrenCreate: [],
          childrenPopular: []
        });
      } finally {
      }
    }
    launchHttp(props);
  }, [props]);

  return infoRequest;
};
