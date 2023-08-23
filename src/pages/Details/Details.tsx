import { useParams } from "react-router-dom";
import { useGetIdParamsQuery, useGetVideosIdQuery } from "../../api/movieApi";
import styles from "./styles.module.scss";
import { useEffect, useMemo } from "react";
import { EnumBaseUrl, EnumSizeImage } from "../../constants";
import SectionDetailsRight from "../../components/SectionDetails/SectionDetailsRight/SectionDetailsRight";
import FooterDetails from "../../components/FooterDetails/FooterDetails";
import SectionDetailsLeft from "../../components/SectionDetails/SectionDetailsLeft/SectionDetailsLeft";
import GenresList from "../../components/GenresList/GenresList";

const Details = () => {
  const { id } = useParams();
  const { data } = useGetIdParamsQuery(id as string);
  const { data: idVideo } = useGetVideosIdQuery(data?.id as number);

  useEffect(() => {
    document.title = data ? `${data.title} - FILMFLIX ™` : "FILMFLIX ™";
    return () => {
      document.title = "FILMFLIX ™";
    };
  }, [data]);

  const heroDetails = useMemo(() => {
    if (idVideo?.results[0]?.key) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${idVideo?.results[0].key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      );
    }
    return (
      <img
        src={`${EnumBaseUrl.BASE_IMG}${EnumSizeImage.IMG_ORIGINAL}${data?.poster_path}`}
        alt="Copertina"
      />
    );
  }, [data?.poster_path, idVideo?.results]);

  const dataControlled = useMemo(() => {
    if (data) {
      return (
        <>
          <SectionDetailsLeft data={data} />

          <SectionDetailsRight data={data} />
        </>
      );
    }
    return (
      <div>
        <p>Dettagli non disponibili</p>
      </div>
    );
  }, [data]);

  const genresControlled = useMemo(() => {
    if (data?.genres) {
      return <GenresList genresList={data?.genres} />;
    }
  }, [data?.genres]);

  return (
    <div className={styles.Details}>
      {heroDetails}
      <div className={styles.genres}>{genresControlled}</div>

      <div className={styles.content}>{dataControlled}</div>
      <FooterDetails companies={data?.production_companies} />
    </div>
  );
};
export default Details;
